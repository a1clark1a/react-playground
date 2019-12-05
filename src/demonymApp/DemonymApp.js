import React, { Component } from "react";
import "./DemonymApp.css";

import Demonym from "./Demonym";
import CountrySelector from "./CountrySelector";

class DemonymApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch("https://country.register.gov.uk/recordsWrong.json?page-size=5000")
      .then(response => {
        // check if respone is ok
        console.log("About to check error");
        if (!response.ok) {
          console.log("An error occured");
          throw new Error("Something went wrong");
        }
        return response.json(); // ok so just continue
      })
      .then(data => {
        //console.log(data);
        const countries = Object.keys(data).map(key => data[key].item[0]);
        this.setState({
          countries,
          error: null
        });
      })
      .catch(err => {
        //this catch handles the error
        console.log("Handling error here", err);
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }
  render() {
    const demon = this.state.selected ? (
      <Demonym
        name={this.state.selected["citizen-names"]}
        country={this.state.selected.name}
      />
    ) : (
      <div className="demonym_app__placeholder">Select a country above</div>
    );

    const error = this.state.error ? (
      <div className="denonym_app__error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className="demonym_app">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}
        />
        {demon}
      </div>
    );
  }
}

export default DemonymApp;
