import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Options extends Component {

    render() {
        return (
            <div className="App-options">
                <Link to="/hot" onClick={this.props.changeHot} style={{ background: this.props.colorHot }}>HOT</Link>
                <Link to="/news" onClick={this.props.changeNews} style={{ background: this.props.colorNews }}>NEWS</Link>
                <Link to="/rising" onClick={this.props.changeRising} style={{ background: this.props.colorRising }}>RISING</Link>
            </div>
        );
    }
}

export default Options;
