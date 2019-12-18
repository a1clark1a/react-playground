import React, { Component } from "react";
import Currency from "./Currency";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        Germnay: <Currency value={21} locale="de-De" currency="US" />
        USA: <Currency value={21} locale="en-US" currency="USD" />
      </div>
    );
  }
}
