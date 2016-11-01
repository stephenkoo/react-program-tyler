let React = require('react');
let ReactDOM = require('react-dom');
let routes = require('./config/routes');
let Raven = require('raven-js')

let sentryKey = '73f04bab20e84d418eff42efdc64a54f'
let sentryApp = '111055'
let sentryURL = `https://${sentryKey}@sentry.io/${sentryApp}`

Raven.config(sentryURL).install()

console.log(window.thing.doesNotExist) // This error is viewable in Sentry's dashboard

ReactDOM.render(
  routes,
  document.getElementById('app0')
);
