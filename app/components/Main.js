let React = require('react');

let Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        {this.props.children} // This is how Main.js loads its child routes
      </div>
    )
  }
});

module.exports = Main;
