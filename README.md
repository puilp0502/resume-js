# React-TypeScript Webpack Template

## Getting Started

To start the development server, use
```sh
$ npm run start
```

For production build, use
```sh
$ npm run build
```
Don't forget to change the `"homepage"` of `package.json` for production build! (This value is used when referencing absolute resources, such as `favicon.ico`.) 
## Configuration Overview

### Webpack
Webpack's configuration is divided into two parts: production and development.  
Each configuration is stored in `config/webpack.prod.js` and `config/webpack.dev.js`, respectively.  
Shared configuration between the two environments are stored in `config/webpack.common.js`.

### TSC
TypeScript configuration file is located at `tsconfig.json` (as usual).
