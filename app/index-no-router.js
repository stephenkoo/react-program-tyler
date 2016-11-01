let USER_DATA = {
  name: 'Stephen Koo',
  username: 'stephenkoo'
  image: 'https://vignette1.wikia.nocookie.net/theregularshow/images/7/74/InfoboxTylertheCreator.png/revision/latest?cb=20141025231237'
}

let React = require('react');
let ReactDOM = require('react-dom');

/*
// React component
let HelloWorld = React.createClass({
  render: function() {
    return (
      <div> Hello World </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('app0')
);

// React components with props/nested components
let HelloUser = React.createClass({
  render: function() {
    return (
      <div> Hello {this.props.name} </div> // <- {prop here}
    )
  }
});

ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app1'));
*/

// Pure functions -  arrays/inputs unchanged, thus always produce same result
// All React components should be FIRST (Focused, Independent, Reusable, Small, Testable)

let ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

let ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={`https://www.github.com/${this.props.username}`}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

let ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
});

// This container component nests above 3 functions
let Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app1')
);

// These functions can now also be written as Stateless Functional Components:
let ProfilePic = function (props) {
   return <img src={'https://photo.fb.com/' + props.username} />
 }
let ProfileLink = function (props) {
 return (
   <a href={'https://www.fb.com/' + props.username}>
     {props.username}
   </a>
 )
}
let Avatar = function (props) {
 return (
   <div>
     <ProfilePic username={props.username} />
     <ProfileLink username={props.username} />
   </div>
 )
}
 <Avatar username="tylermcginnis" />

// this.props.children = whatever is between tags
let Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href)
  },
  render: function() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})
let ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={`https://www.github.com/${this.props.username}`}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});
