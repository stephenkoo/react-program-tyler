let React = require('react');
let ConfirmBattle = require('../components/ConfirmBattle');
let githubHelpers = require('../utils/githubHelpers');

let ConfirmBattleContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired

  },
  getInitialState: function () {
      console.log('getInitialState');
      return {
          isLoading: true,
          playersInfo: []
      }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    let query = this.props.location.query;
    // console.log('Query', query);
    console.log('componentDidMount');
    // Fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        // console.log('PLAYERS', players)
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this)); // Bind this inside function to (this) outside function
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnMount: function () {
    console.log('componentWillUnMount');
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
      return (
          <ConfirmBattle 
            isLoading={this.state.isLoading}
            onInitiateBattle={this.handleInitiateBattle}
            playersInfo={this.state.playersInfo}
             />
      );
  }
});

module.exports = ConfirmBattleContainer;