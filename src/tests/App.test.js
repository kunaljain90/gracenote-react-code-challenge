import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  const app = shallow(<App/>)

  it('renders component', () => {
    expect(app).toExist
  })
})