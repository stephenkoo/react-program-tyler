let React = require('react');
let transparentBg= require('../styles').transparentBg;

let PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    // console.log(this);
    getInitialState: function() {
        return {
            username: ''
        }
    },
    onUpdateUser: function(e) {
      this.setState({
        username: e.target.value
      })
    },
    onSubmitUser: function() {
      e.preventDefault();
      let username = this.state.username;
      this.setState({
        username: ''
      });

      if (this.props.routeParams.playerOne) {
        // go to /battle
        // console.log(this.context)
        this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: this.state.username
          }
        })
      } else {
        // go to /playerTwo
        // console.log(this.context)
        this.context.router.push(`/playerTwo/${this.state.username}`)
      }
    }
    return (
      <div className="jumbotron" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
            <form onSubmit={this.onSubmitUser}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Github Username"
                        onChange={this.onUpdateUser}
                        value={this.state.username}
                        type="text" />
                </div>
                <div className="form-group col-sm-4">
                    <button
                        className="btn btn-block"
                        type="submit">
                            Continue
                    </button>
                </div>
            </form>
        </div>˜

      </div>
    )
  }
});

module.exports = PromptContainer;