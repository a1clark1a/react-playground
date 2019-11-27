import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "world"
    };
  }

  changeState = val => {
    this.setState({
      who: val
    });
  };

  render() {
    return (
      <div>
        <p>Hello,{this.state.who}</p>
        <button onClick={() => this.changeState("Friend")}>Friend</button>
        <button onClick={() => this.changeState("React")}>React</button>
        <button onClick={() => this.changeState("World")}>World</button>
      </div>
    );
  }
}

export default HelloWorld;
