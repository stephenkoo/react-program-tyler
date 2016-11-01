let React = require('react');
let ReactDOM = require('react-dom');
let routes = require('./config/routes');
let Raven = require('raven-js')

let sentryKey = '73f04bab20e84d418eff42efdc64a54f'
let sentryApp = '111055'
let sentryURL = `https://${sentryKey}@sentry.io/${sentryApp}`

let _APP_INFO = {
  name: 'Github Battle',
  branch: '4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version, // This lets you track which version of your App is causing error in Sentry's dashboard
  tags: {
    branch: _APP_INFO.branch, // This shows the branch causing error too.
    github_commit: 'asdio293sd3i' // A common one. This shows the Github commit hash that caused error.
  }
}).install()

console.log(window.thing.doesNotExist) // This error is viewable in Sentry's dashboard

ReactDOM.render(
  routes,
  document.getElementById('app0')
);
