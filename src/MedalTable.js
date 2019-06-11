import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import MedalSummary from './MedalSummary';
import Header from './Header';
import MedalSportType from './MedalSportType';
import MedalParticipants from './MedalParticipants';

class MedalTable extends PureComponent {
    render() {
        const { medalData } = this.props
        return (
            <div>
                <Header></Header>
                <div className="container mt-4 p-3" >
                    <MedalSummary data={medalData.NOCMedals}></MedalSummary>
                    <MedalSportType data={medalData}></MedalSportType>
                    <MedalParticipants data={medalData.SportList}></MedalParticipants>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = ({ medalData }) => ({ medalData })

export default connect(mapStatetoProps)(MedalTable)

