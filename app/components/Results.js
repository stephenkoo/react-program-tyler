let React = require('react');
let PropTypes = React.PropTypes;
let styles = require('../styles');
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');
let Link = require('react-router').Link;
let MainContainer = require('./MainContainer');
let Loading = require('./Loading');

// function puke (obj) {
//   return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
// }

// Private stateless functional component
function StartOver () {
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' cxwlassName='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Results (props) {
  // isLoading check
  if (props.isLoading === true) {
    return <Loading text='One Moment' speed={100} />
  }

  // Checks for tie
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex = winningIndex === 0 ? 1 : 0;
  return {
    // <div> Results {puke(props)} </div>
    <MainContainer}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={pros.scores[winningIndex]} info={props.playerInfor[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={pros.scores[losingIndex]} info={props.playerInfor[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  }
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
