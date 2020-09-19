const _common = require("./webpack.common.js");
const path = require("path");

const common = _common("prod");

module.exports = {
  entry: "./src/scriptingModule.tsx",
  mode: "production",
  target: "node",
  devtool: "", // No sourcemap
  output: {
    filename: "scriptingModule.js",
    path: path.join(__dirname, "../scripts"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader?emitFile=false"],
      },
    ],
  },
  resolve: common.resolve,
};
