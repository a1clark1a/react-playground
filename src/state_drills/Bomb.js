import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      display: "tick"
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        display: this.state.count >= 8 ? this.explode() : this.timer()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  explode() {
    clearInterval(this.interval);
    return "BOOM!!!";
  }

  timer() {
    console.log(this.state.count);
    return this.state.count % 2 === 0 ? "tick" : "tock";
  }

  render() {
    return (
      <div>
        <p>{this.state.display}!!</p>
      </div>
    );
  }
}

export default Bomb;
