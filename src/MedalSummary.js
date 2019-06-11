import React, { Component } from 'react';

class MedalSummary extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <h4 className="text-center mb-4">Dutch Winter Olympics Performance - 2014</h4>
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
                        <tr>
                            <td> {data.NOC.c_Name} </td>
                            <td> {data.Medals.n_Total} </td>
                            <td> {data.Medals.n_Gold} </td>
                            <td> {data.Medals.n_Silver} </td>
                            <td> {data.Medals.n_Bronze} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default MedalSummary;