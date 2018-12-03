import React, { Component, Fragment } from 'react';

class Hot extends Component {

    state = {
        hot: [],
        limit: 10
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

    changeLimit = () => {
        this.setState({
            limit: 100000
        })
    }

    render() {
        console.log(this.state.hot.slice(0, 5))
        return (
            <div>
                {
                    this.state.hot.slice(0, this.state.limit).map((hot) => {
                        return (
                            <a className="item" href={hot.url} target="window.open();" key={hot.id}>
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
                <Fragment>
                    {
                        this.state.hot.length <= 0 &&
                        'Nenhuma resultado encontrado!'
                        ? <button className="ver-mais" onClick={this.changeLimit}>+ Ver mais</button> : <button className="ver-mais" onClick={this.changeLimit}>+ Ver mais</button>
                    }
                </Fragment>
            </div>
        );
    }
}

export default Hot;