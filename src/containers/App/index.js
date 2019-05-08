import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from '../../components/Header'

import {Home, NotFound, Details} from '../'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/propertyDetails/:id" component={Details}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App
