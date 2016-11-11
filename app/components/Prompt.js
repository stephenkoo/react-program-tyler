let React = require('react');
let transparentBg= require('../styles').transparentBg;
let PropTypes = React.PropTypes; // Stipulate what type a prop is, so no errors

// Since below is a functional stateless component - no states, no methods, only render & proptypes, so instead of React.createClass, we can just do:
function Prompt (props) {
  return (
    <div className="jumbotron" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
              <div className="form-group">
                  <input
                      className="form-control"
                      placeholder="Github Username"
                      onChange={props.onUpdateUser}
                      value={props.username}
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
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired, // Rejects e.g. array inputs
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}