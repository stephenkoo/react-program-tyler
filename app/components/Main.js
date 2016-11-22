let React = require('react');
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../mains.css');

let Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = Main;
