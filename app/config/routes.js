// React router just maps a URL to a React component
let React = require('react');
let ReactRouter = require('react-router');
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
// Require your components once you establish routes
let Main = require('../components/Main');
let Home = require('../components/Home');

// Build routes
let routes = (
  <Router>
    <Route path='/' component={Main}> // Means: No matter what path someone goes to, always make sure Main component is active (e.g. topbar/footbar)
      // <Route path='/home' component={Home} /> // Main component in charge of loading its child routes - done in Main.js
      <IndexRoute component={Home} /> // IndexRoute is active when other routes are not
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
)

module.exports = routes;
