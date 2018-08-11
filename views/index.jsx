var React = require('react');


class HelloWorld extends React.Component {
  render() {
    return (
      <div>
      <h1> yellow world {this.props.name} </h1>
      </div>
 );
  }
}


module.exports = HelloWorld;
