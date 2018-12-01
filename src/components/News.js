import React, { Component } from 'react';

class News extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        const url = 'https://www.reddit.com/r/reactjs/new.json';
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.data.children)
                this.setState({ news: data.data.children.map(data => data.data) });
            })
            .catch(error => {
                console.error("Não foi possível carregar a api.", error)
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.news.map((news) => {
                        return (
                            <a className="item" key={news.id} href={news.url} target="_blank">
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
            </div>
        );
    }
}

export default News;