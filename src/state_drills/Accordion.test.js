import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";

describe("Accordion Component", () => {
  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
    }
  ];

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion sections={sections} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders no content by default", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders empty if no sections give", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("content opens when any section is clicked", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Only one content from one section opens at a time", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find("button").forEach(button => {
      return button.simulate("click");
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
