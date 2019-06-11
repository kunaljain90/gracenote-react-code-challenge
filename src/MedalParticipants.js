import React, { Component } from 'react';

class MedalParticipants extends Component {
    render() {
        const { data } = this.props;

        return (
            <div>
                {data.map((sport, index) => {
                    return <div key={index}>
                        <h6 className="text-center mt-4 mb-4"><i>Participants - {sport.Sport.c_Name}</i></h6>
                        <table className="table table-striped table-bordered table-dark table-hover text-center">
                            <thead>
                                <tr>
                                    <td>Participant Name / Team</td>
                                    <td>Event</td>
                                    <td>Gender</td>
                                    <td>Medal Type</td>
                                </tr>
                            </thead>
                            <tbody>
                                {sport.GoldMedalList.map((sportData, index) => {
                                    return <tr key={index}>
                                        <td>{sportData.Participant.c_Participant}</td>
                                        <td>{sportData.Event.c_Name}</td>
                                        <td>{sportData.Gender.c_Name}</td>
                                        <td>Gold</td>
                                    </tr>
                                })}

                                {sport.SilverMedalList.map((sportData, index) => {
                                    return <tr key={index}>
                                        <td>{sportData.Participant.c_Participant}</td>
                                        <td>{sportData.Event.c_Name}</td>
                                        <td>{sportData.Gender.c_Name}</td>
                                        <td>Silver</td>
                                    </tr>
                                })}

                                {sport.BronzeMedalList.map((sportData, index) => {
                                    return <tr key={index}>
                                        <td>{sportData.Participant.c_Participant}</td>
                                        <td>{sportData.Event.c_Name}</td>
                                        <td>{sportData.Gender.c_Name}</td>
                                        <td>Bronze</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                })}
            </div>
        )
    }
}


export default MedalParticipants;