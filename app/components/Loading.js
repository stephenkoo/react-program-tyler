let React = require('react');

let styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px' 
  }
};

let Loading = React.createClass({
  getInitialState: function () {
    this.originalText = 'Loading';
    return {
      text: 'Loading'
    }
  },
  componentDidMount: function () {
    let stopper = this.originalText + '...';
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), 300)
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return (
      <div style={style.container}>
        <p style={style.content}>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Loading;