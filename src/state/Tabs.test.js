import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Tabs from "./Tabs";

describe("Tabs Component", () => {
  const tabsProp = [
    {
      name: "First tab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
    },
    {
      name: "Second tab",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Third tab",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
    }
  ];

  //the tab component renders without problem
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //tests to check if the first is rendered first
  it("renders the first tab by default", () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  //test if tabs are rendering
  it("renders empty given no tabs", () => {
    const wrapper = shallow(<Tabs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  //test for clicking buttons
  it("closes the first tab and opens any clicked tab", () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
    console.log(">>> WRAPPER <<<");
    console.log(wrapper.debug());
    console.log(">>> FIND(BUTTON) <<<");
    //console.log(wrapper.find("button").debug()); //all the buttons
    console.log(
      wrapper
        .find("button")
        .at(1)
        .debug()
    );
  });
});
