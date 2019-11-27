import React from "react";
import "./Accordion.css";

//Accordion component accepts a prop named sections
//sections prop is an array of objects
class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };

  state = {
    currentSectionIndex: null
  };

  handleClick(index) {
    this.setState({
      currentSectionIndex: index
    });
  }

  renderList() {
    const { sections } = this.props;
    const { currentSectionIndex } = this.state;
    return sections.map((objSect, i) => {
      return (
        <li key={i}>
          <button type="button" key={i} onClick={() => this.handleClick(i)}>
            {objSect.title}
          </button>
          {currentSectionIndex === i && <p>{objSect.content}</p>}
        </li>
      );
    });
  }

  render() {
    return <ul className="Accordion">{this.renderList()}</ul>;
  }
}

export default Accordion;
