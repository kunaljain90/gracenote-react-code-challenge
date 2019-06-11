import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MedalSportType from '../MedalSportType';
import medalData from '../data/sample-data.json'


Enzyme.configure({ adapter: new Adapter() })

describe('<MedalSportsType />', () => {
  const medalSportType = shallow(<MedalSportType data={medalData}/>)

  it('renders component', () => {
    expect(medalSportType).toExist
  })
})