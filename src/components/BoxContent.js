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
                    <Route exact path="/" component={Hot} />
                    <Route exact path="/hot" component={Hot} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/rising" component={Rising} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </div>
        );
    }
}

export default BoxContent;