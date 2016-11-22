# Webpack

## Set up webpack
0. `npm i -g webpack` to enable webpack CLI
0. `npm i -S react react-dom`
0. `npm i -D`
..* `webpack webpack-dev-server`
..* `babel-{core,loader} babel-preset-{react,es2017}`
..* `style-loader css-loader postcss-loader autoprefixer sass-loader node-sass`
..* `html-webpack-plugin` to replicate html files to webpack's /dist folder
0. `npm i -S react-router`
0. `npm i -S raven-js` to use Sentry to check user errors
0. `npm  i -S axios`
0. `npm i -S react-addons-css-transition-group`
0. `npm i -D css-loader style-loader`
(You can use the npm-install-webpack-plugin module to automatically install modules in webpack.config.js & skip above steps.)

## Run webpack
0. `webpack-dev-server` or `npm run start`
0. `webpack -w` or `npm run watch` runs webpack watch
0. `webpack -p` or `npm run production` runs webpack & minifies code

# View
localhost:8080
