import React, { Component } from 'react';
import Hot from './Hot'
import News from './News'
import Rising from './Rising'

class BoxContent extends Component {

    render() {
        return (
            <div>
                {this.props.hot === true &&
                    <Hot />
                }
                {this.props.news === true &&
                    <News />
                }
                {this.props.rising === true &&
                    <Rising />
                }
            </div>
        );
    }
}

export default BoxContent;