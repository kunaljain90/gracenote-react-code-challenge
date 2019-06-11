import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../store';
import medalData from '../data/sample-data.json'
import MedalTable from '../MedalTable';

Enzyme.configure({ adapter: new Adapter() })

describe('<MedalTable />', () => {
    const container = shallow(<MedalTable store={store} data={medalData}/>)

    it('renders with store as a wrapper', () => {
        expect(container).toExist
    })

    it('is passed medalData as props onload', () => {
        expect(container.props().data).toBeDefined
        expect(container.props().data).toEqual(medalData)
    })

    it('has medal-summary', () => {
        const wrapper = mount(<MedalTable  store={store} data={medalData}/>) 
        expect(wrapper.find('MedalSummary').length).toEqual(1)
      })

      it('has medal-participants', () => {
        const wrapper = mount(<MedalTable  store={store} data={medalData}/>) 
        expect(wrapper.find('MedalParticipants').length).toEqual(1)
      })

      it('has medal-sportsType', () => {
        const wrapper = mount(<MedalTable  store={store} data={medalData}/>) 
        expect(wrapper.find('MedalSportType').length).toEqual(1)
      })

      it('has header', () => {
        const wrapper = mount(<MedalTable  store={store} data={medalData}/>) 
        expect(wrapper.find('Header').length).toEqual(1)
      })
})
