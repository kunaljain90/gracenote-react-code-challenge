import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
  const header = shallow(<Header/>)

  it('renders component', () => {
    expect(header).toExist
  })

  
  it('has app-title', () => {
    const wrapper = mount(<Header/>) 
    expect(wrapper.find('h1').hasClass('app-title')).toEqual(true)
  })
})