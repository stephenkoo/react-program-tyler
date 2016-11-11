let React = require('react');
let PropTypes = React.PropTypes;

function puke (object) {
  return <pre>{JSON.stringify(obj, null, '')}</pre>
}

function ConfirmBattle (object) {
    // return (
    //     <div> Confirm Battle </div>
    // )
    return props.isLoading === true
        ? <p> LOADING! </p>
        : <div> CONFIRM BATTLE!: {puke(props)} </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;