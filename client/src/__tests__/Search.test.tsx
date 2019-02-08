import * as React from "react";
import {Search} from "../components";
import { shallow } from 'enzyme';
describe("<Search/>",()=>{
  it('renders without crashing', ()=>{
    shallow(<Search/>);
  })
})