import React, { Component } from 'react';

class Rising extends Component {

    state = {
        rising: []
    }

    componentWillMount() {
        const url = 'https://www.reddit.com/r/reactjs/rising.json';
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data.children)
                this.setState({ rising: data.data.children.map(data => data.data) });
            })
            .catch(error => {
                console.error("Não foi possível carregar a api.", error)
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.rising.map((rising) => {
                        return (
                            <a className="item" key={rising.id} href={rising.url} target="_blank">
                                <div className="box" key={rising.id}>
                                    <div className="thumb">
                                        <img alt={rising.title} src={rising.thumbnail === 'self' || rising.thumbnail === 'default' ? 'https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default' : rising.thumbnail} width="100px" height="100px" />
                                    </div>
                                    <div className="infos">
                                        <h3>{rising.title}</h3>
                                        <p>Enviado <b>por</b><span>{rising.author}</span></p>
                                        <label>{rising.domain}</label>
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

export default Rising;