import React, { Component, Fragment } from 'react';

class Hot extends Component {

    state = {
        hot: []
    }

    componentWillMount() {
        const url = 'https://www.reddit.com/r/reactjs/hot.json';
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data.children)
                this.setState({ hot: data.data.children.map(data => data.data) });
            })
            .catch(error => {
                console.error("Não foi possível carregar a api.", error)
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.hot.map((hot) => {
                        return (
                            <a className="item" href={hot.url} target="_blank" key={hot.id}>
                                <div className="box">
                                    <div className="thumb">
                                        <img alt={hot.title} src={hot.thumbnail === 'self' || hot.thumbnail === 'default' ? 'https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default' : hot.thumbnail} width="100px" height="100px" />
                                    </div>
                                    <div className="infos">
                                        <h3>{hot.title}</h3>
                                        <p>Enviado <b>por</b><span>{hot.author}</span></p>
                                        <label>{hot.domain}</label>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        );
    }
}

export default Hot;