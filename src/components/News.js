import React, { Component, Fragment } from 'react';

class News extends Component {

    state = {
        news: [],
        limit: 10
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://www.reddit.com/r/reactjs/new.json');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            this.setState({ news: data.data.children.map(data => data.data) });
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
                    this.state.news.slice(0, this.state.limit).map((news) => {
                        return (
                            <a className="item" key={news.id} href={news.url} target="window.open();">
                                <div className="box" key={news.id}>
                                    <div className="thumb">
                                        <img alt={news.title} src={news.thumbnail === 'self' || news.thumbnail === 'default' ? 'https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default' : news.thumbnail} width="100px" height="100px" />
                                    </div>
                                    <div className="infos">
                                        <h3>{news.title}</h3>
                                        <p>Enviado <b>por</b><span>{news.author}</span></p>
                                        <label>{news.domain}</label>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
                <Fragment>
                    {
                        this.state.news.length <= 0
                            ? 'Nenhuma resultado encontrado!' : <button className="ver-mais" onClick={this.changeLimit}>+ Ver mais</button>
                    }
                </Fragment>
            </div>
        );
    }
}

export default News;