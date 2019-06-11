import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MedalSummary from '../MedalSummary';
import medalData from '../data/sample-data.json'

Enzyme.configure({ adapter: new Adapter() })

describe('<MedalSummary />', () => {
  const medalSummary = shallow(<MedalSummary data={medalData.NOCMedals}/>)

  it('renders component', () => {
    expect(medalSummary).toExist
  })
})