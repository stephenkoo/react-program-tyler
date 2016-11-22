let React = require('react');
let PropTypes = React.PropTypes;
let styles = require('../styles');
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}
function Results (props) {
  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex = winningIndex === 0 ? 1 : 0;
  return {
    // <div> Results {puke(props)} </div>
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={pros.scores[winningIndex]} info={props.playerInfor[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={pros.scores[losingIndex]} info={props.playerInfor[losingIndex]} />
        </UserDetailsWrapper>
      </div>
    </div>
  }
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
