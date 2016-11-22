let React = require('react');
// let transparentBg= require('../styles').transparentBg; // No need this dependency after replacing it with MainContainer component
let Link = ReactRouter.Link;
let MainContainer = require('./MainContainer');

let Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
      	<h1>Github Battle</h1>
      	<p className='lead'>Some fancy motto</p>
      	<Link to='/playerOne'>
      		<button type='button' className='btn btn-lg'>Get started</button>
      	</Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
