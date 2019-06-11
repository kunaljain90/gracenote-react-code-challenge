import React, { Component } from 'react';

class MedalSportType extends Component {
    render() {
        const { data } = this.props;

        return (
            <div>
                <h6 className="text-center mt-4 mb-4"><i>Below you can find Sports wise summary</i></h6>
                <table className="table table-striped table-bordered table-dark table-hover text-center medal-summary">
                    <thead>
                        <tr>
                            <td> Sport Type</td>
                            <td>Medal Tally</td>
                            <td>Gold 🥇</td>
                            <td>Silver 🥈</td>
                            <td>Bronze 🥉</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.SportList.map((value, index) => {
                            return <tr key={index}>
                                <td> {value.Sport.c_Name} </td>
                                <td> {value.Medals.n_Total} </td>
                                <td> {value.Medals.n_Gold} </td>
                                <td> {value.Medals.n_Silver} </td>
                                <td> {value.Medals.n_Bronze} </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MedalSportType;