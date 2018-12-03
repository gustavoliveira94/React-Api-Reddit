import React, { Component, Fragment } from 'react';

class Rising extends Component {

    state = {
        rising: [],
        limit: 10
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://www.reddit.com/r/reactjs/rising.json');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            this.setState({ rising: data.data.children.map(data => data.data) });
        } catch (error) {
            console.log(error);
        }
    }

    changeLimit = () => {
        this.setState({
            limit: 100000
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.rising.slice(0, this.state.limit).map((rising) => {
                        return (
                            <a className="item" key={rising.id} href={rising.url} target="window.open();">
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
                <Fragment>
                    {
                        this.state.rising.length <= 0
                            ? 'Nenhuma resultado encontrado!' : <button className="ver-mais" onClick={this.changeLimit}>+ Ver mais</button>
                    }
                </Fragment>
            </div>
        );
    }
}

export default Rising;