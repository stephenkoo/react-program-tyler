let React = require('react');
let PropTypes = React.PropTypes;
let styles = require('../styles');
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');
let Link = require('react-router').Link;

// function puke (obj) {
//   return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
// }

function Results (props) {
  // Checks for tie
  if (props.scores[0] === props.scores[1]) {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>It's a tie!</h1>
        <div className='col-sm-12' style={styles.space}>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
          </Link>
        </div>
      </div>
    )
  }

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
      <div className='col-sm-12' style={styles.space}>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
        </Link>
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
