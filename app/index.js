let React = require('react');
let ReactDOM = require('react-dom');

let HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello World </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
