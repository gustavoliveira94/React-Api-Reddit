import React, { Component } from 'react';

class Options extends Component {

    render() {
        return (
            <div className="App-options">
                <button onClick={this.props.changeHot} style={{ background: this.props.colorHot }}>HOT</button>
                <button onClick={this.props.changeNews} style={{ background: this.props.colorNews }}>NEWS</button>
                <button onClick={this.props.changeRising} style={{ background: this.props.colorRising }}>RISING</button>
            </div>
        );
    }
}

export default Options;
