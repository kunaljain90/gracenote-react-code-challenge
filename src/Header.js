import React, { Component } from 'react';
import './styles/Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <div className="toolbar">
                    <div className="demo-toolbar">
                        <h1 className="app-title">Winter Olympics Medal Tally</h1>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
