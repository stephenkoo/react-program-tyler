# Webpack

0. `npm i -g webpack` to enable webpack CLI
0. `npm i -S react react-dom`
0. `npm i -D`
..* `webpack webpack-dev-server`
..* `babel-{core,loader} babel-preset-{react,es2017}`
..* `style-loader css-loader postcss-loader autoprefixer sass-loader node-sass`
..* `html-webpack-plugin` to replicate html files to webpack's /dist folder
0. `webpack -w` runs webpack watch
0. `webpack -p` runs webpack & minifies code

(You can use the npm-install-webpack-plugin module to automatically install modules in webpack.config.js & skip above steps.)
