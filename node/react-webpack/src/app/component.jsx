// https://babeljs.io/blog/2015/06/07/react-on-es6-plus
import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    }

    this. _handleClick = this. _handleClick.bind(this);
    // Operations usually carried out in componentWillMount go here
  }

  _handleClick(e) {
    alert("clicked");
  }

  render() {
    return <h1 onClick={this._handleClick}>Hello world {this.state.name || this.name}</h1>;
  }
}

Hello.defaultProps = {
  name: "Doe",
}

Hello.propTypes = {
  // arrayProp: React.PropTypes.array,
  // boolProp: React.PropTypes.bool,
  // funcProp: React.PropTypes.func,
  // numProp: React.PropTypes.number,
  // objProp: React.PropTypes.object,
  name: React.PropTypes.string
}

export default Hello;
