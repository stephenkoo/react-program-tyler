let React = require('react');
let transparentBg= require('../styles').transparentBg;
let Link = ReactRouter.Link;

let Home = React.createClass({
  render: function() {
    return (
      <div className='jumbotron col-sm-12' style={transparentBg}>
      	<h1>Github Battle</h1>
      	<p className='lead'>Some fancy motto</p>
      	<Link to='/playerOne'>
      		<button type='button' className='btn btn-lg'>Get started</button>
      	</Link>
      </div>
    )
  }
});

module.exports = Home;
