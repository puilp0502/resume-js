const fs = require("fs");
const path = require("path");

const string = require("lodash/string");
const JSDOM = require("jsdom").JSDOM;
const minify = require("html-minifier").minify;

// scriptingModule is webpack-bundled script. Run `npm run build-static-module` to build.
const scriptingModule = require("./scriptingModule");

const resumeJsonPath = process.argv[2] || "resume.json";
const outputPath = process.argv[3] || "output.html";

// TODO: Use asynchronous versions of I/O functions

const template = fs.readFileSync(path.join(__dirname, "../src/index.html"));

const PUBLIC_URL = ""; // TODO: Read this from package.json
const renderer = string.template(template);
const shimDOM = new JSDOM(renderer({ PUBLIC_URL: PUBLIC_URL }));

let resumeData = null;
try {
  const resumeJsonText = fs.readFileSync(resumeJsonPath);
  resumeData = JSON.parse(resumeJsonText);
} catch (e) {
  console.error(e);
  console.error(
    `Error reading resume data from ${resumeJsonPath}: Maybe file does not exist / is not a valid JSON?`
  );
}
// Render markup using render method of precompiled scripting module
const { style, markup } = scriptingModule.render(shimDOM.window, resumeData);
// Shove them into the DOM
const shimDocument = shimDOM.window.document;
shimDocument.head.innerHTML += style;
shimDocument.getElementById("root").innerHTML = markup;

const html = minify(shimDocument.documentElement.outerHTML, {
  collapseWhitespace: true,
  minifyCSS: true,
  removeComments: true,
});

fs.writeFile(outputPath, html, (err) => {
  if (err) console.error(err);
});
