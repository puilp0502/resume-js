/**
 * scriptingModule.tsx: webpack-bundled script with baked App definition.
 * If you made any changes to the React app (almost anything inside src/),
 * you need to recompile the script using `npm run build-static-renderer`.
 * NOTE: Modification in JSON data (e.g. resume.json) does not require recompilation. */

import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { ResumeData } from "./App";

export function render(window: any, resumeData: ResumeData) {
  // window and document object is used by style-loader to inject CSS modules.
  // these objects will be supplied by scripts/render.js
  global.window = window;
  global.document = window.document;

  // Global import will break the compiled bundle since ./App module imports
  // CSS module globally, and CSS module will try to access DOM (which we
  // don't have globally). To avoid this, import the ./App lazily.
  const App = require("./App").default;

  const sheet = new ServerStyleSheet();
  const markup = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(<App resumeData={resumeData as ResumeData} />)
  );
  const styleTags = sheet.getStyleTags();
  return { style: styleTags, markup: markup };
}
