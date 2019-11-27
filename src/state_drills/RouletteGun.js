import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }

  static defaultProps = {
    bulletInChamber: 8
  };

  shoot = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.timeout = setTimeout(() => {
      this.setState({
        spinningTheChamber: false,
        chamber: this.generateRandomNum()
      });
      console.log(this.state.chamber);
      console.log(this.props.bulletInChamber);
    }, 2000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  generateRandomNum = () => {
    const min = Math.ceil(1);
    const max = Math.floor(8);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  display() {
    if (this.state.spinningTheChamber) {
      return "Spinning the chamber and pulling the trigger";
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return "BANG!!!";
    } else {
      return "YOU'RE SAFE!!";
    }
  }

  render() {
    return (
      <div>
        <p>{this.display()}</p>
        <button onClick={this.shoot}>PULL THE TRIGGER!</button>
      </div>
    );
  }
}

export default RouletteGun;
