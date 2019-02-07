import * as React from "react";

import {App} from "../components";
import { shallow } from 'enzyme';
import {Link} from "react-router-dom";
describe("<App/>",()=>{
  it('renders without crashing', ()=>{
    shallow(<App/>);
  })
  it('contains one <Link/>', ()=>{
    const wrapper = shallow(<App/>);
    const link = <Link to ="/">Test</Link>
    expect(wrapper.contains(link)).toBe(true);
  })
})