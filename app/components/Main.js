let React = require('react');

let Main = React.createClass({
  render: function() {
    return (
      <div>Hello from main</div>
      {this.props.children} // This is how Main.js loads its child routes
    )
  }
});

module.exports = Main;
