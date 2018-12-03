import React, { Component } from 'react';
import Hot from './Hot'
import News from './News'
import Rising from './Rising'
import NotFound from './NotFound'
import { Route, Redirect, Switch } from 'react-router-dom'

class BoxContent extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="https://gustavoliveira94.github.io/react-api-reddit/" component={Hot} />
                    <Route exact path="https://gustavoliveira94.github.io/react-api-reddit/hot" component={Hot} />
                    <Route exact path="https://gustavoliveira94.github.io/react-api-reddit/news" component={News} />
                    <Route exact path="https://gustavoliveira94.github.io/react-api-reddit/rising" component={Rising} />
                    <Route path="https://gustavoliveira94.github.io/react-api-reddit/404" component={NotFound} />
                    <Redirect from='*' to='https://gustavoliveira94.github.io/react-api-reddit/404' />
                </Switch>
            </div>
        );
    }
}

export default BoxContent;