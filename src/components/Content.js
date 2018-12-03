import React, { Component } from 'react';
import BoxContent from './BoxContent';
import Options from './Options';

class Content extends Component {

    state = {
        hot: true,
        news: false,
        rising: false,
        colorHot: '#ff7b00',
        colorNews: '',
        colorRising: ''
    }

    changeHot = () => {
        this.setState({
            hot: true,
            news: false,
            rising: false,
            colorHot: '#ff7b00',
            colorNews: '#282c34',
            colorRising: '#282c34'
        })
    }

    changeNews = () => {
        this.setState({
            news: true,
            hot: false,
            rising: false,
            colorNews: '#ff7b00',
            colorHot: '#282c34',
            colorRising: '#282c34'
        })
    }

    changeRising = () => {
        this.setState({
            rising: true,
            hot: false,
            news: false,
            colorRising: '#ff7b00',
            colorHot: '#282c34',
            colorNews: '#282c34'
        })
    }

    render() {
        return (
            <div className="App-content">
                <Options
                    changeHot={this.changeHot}
                    colorHot={this.state.colorHot}
                    changeNews={this.changeNews}
                    colorNews={this.state.colorNews}
                    changeRising={this.changeRising}
                    colorRising={this.state.colorRising}
                />
                <BoxContent
                    hot={this.state.hot}
                    news={this.state.news}
                    rising={this.state.rising}
                />
            </div>
        );
    }
}

export default Content;
