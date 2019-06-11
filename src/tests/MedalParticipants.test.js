import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MedalParticipants from '../MedalParticipants';
import medalData from '../data/sample-data.json'

Enzyme.configure({ adapter: new Adapter() })

describe('<MedalParticipants />', () => {
  const medalParticipants = shallow(<MedalParticipants data={medalData.SportList}/>)

  it('renders component', () => {
    expect(medalParticipants).toExist
  })
})