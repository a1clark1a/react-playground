import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Demonym from "./Demonym";


describe('Demonym Component', () => {
    it('Renders without error', () => {
        const div= document.createElement('div');
        ReactDOM.render(<Demonym />, div);
        ReactDOM.unmountComponentAtNode(div);
    } 
})