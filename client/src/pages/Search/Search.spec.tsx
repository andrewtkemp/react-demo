import * as React from "react";
import {Search} from "./index";
import { shallow } from 'enzyme';
describe("<Search/>",()=>{
  it('renders without crashing', ()=>{
    shallow(<Search/>);
  })
})