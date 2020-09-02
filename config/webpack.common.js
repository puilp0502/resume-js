const fs = require('fs');
const url = require('url');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Taken from create-react-app
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson).homepage;
function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
  }
}
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, false);
}

module.exports = (webpackEnv) => ({
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        inject: true,
        templateParameters: {
          "PUBLIC_URL": webpackEnv === "dev" ? "" : getServedPath(resolveApp('package.json'))
        },
        // By not specifying specific template engine, we are falling back to lodash template engine
        template: 'src/index.html',
      }
    ),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    /* module.rules: Specifies how to transform source code of a module.
     * Documentation: https://webpack.js.org/concepts/loaders/
     */
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});