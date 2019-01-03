import React from 'react';
import { Link } from 'react-router-dom'

const Options = (props) => {
    return (
        <div className="App-options">
            <Link to="/react-api-reddit/hot" onClick={props.changeHot} style={{ background: props.colorHot }}>HOT</Link>
            <Link to="/react-api-reddit/news" onClick={props.changeNews} style={{ background: props.colorNews }}>NEWS</Link>
            <Link to="/react-api-reddit/rising" onClick={props.changeRising} style={{ background: props.colorRising }}>RISING</Link>
        </div>
    );
}

export default Options;
