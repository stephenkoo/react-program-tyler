let React = require('react');
let PropTypes = React.PropTypes;
let styles = require('../styles');
let link = require('react-router').link;
let UserDetails = require('./UserDetails');
let UserDetailsWrapper = require('./UserDetailsWrapper');
let MainContainer = require('./MainContainer');
let Loading = require('./Loading');

// function puke (object) {
//   return <pre>{JSON.stringify(obj, null, '')}</pre>
// }

function ConfirmBattle (object) {
    // return (
    //     <div> Confirm Battle </div>
    // )
    return props.isLoading === true
        ? <Loading />
        // : <div> CONFIRM BATTLE!: {puke(props)} </div>
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
              <UserDetailsWrapper header='Player One'>
                <UserDetails info={props.playersInfo[0]} />
              </UserDetailsWrapper>
              <UserDetailsWrapper header='Player Two'>
                <UserDetails info={props.playersInfo[1]} />
              </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
              <div className='col-sm-12' style={style.space}>
                <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
                Initiate Battle!
                </button>
              </div>
              <div className='col-sm-12' style={style.space}>
                <link to='/playerOne'>
                  <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                </link>
              </div>
          </div>
        </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;