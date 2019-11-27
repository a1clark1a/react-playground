import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: props.step
    };
  }

  //Arrow function JSX
  handleButtonClick = () => {
    console.log(this.state.step);
    this.setState({ count: this.state.count + this.state.step });
  };

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        {/*arrow function  call without bind*/}
        {/*  <button onClick={() => this.handleButtonClick}>Add 1</button> */}
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  step: 1
};

export default Counter;
