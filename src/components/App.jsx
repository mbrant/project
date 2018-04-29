"use strict"

import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import favicon from '../../public/img/favicon.png'
import Home from './home/homepage.jsx'
import Navbar from './nav/navbar.jsx'
import About from './about/about.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
    constructor() {
        super()

        this.state = {
            navCollapsed: true,
        }

        this._onToggleNav = this
            ._onToggleNav
            .bind(this)

    }


    _onToggleNav() {
        this.setState(prevState => {
            return {
                navCollapsed: !prevState.navCollapsed
            }
        })
    }

    render() {
        return (
        <Router>
            <div>
                <Helmet>
                    <link rel="icon" type="image/png" href={favicon}/>
                    <script type="text/javascript" src="https://js.taplytics.com/jssdk/4192538cd86f46379ee48bc53ff02361.min.js" />
                </Helmet>
                <Navbar
                    navCollapsed={this.state.navCollapsed}
                    toggleCollapse={this._onToggleNav}/>
                <Route path="/" component={Home} exact />
                <div className="spacer" />
                <Route path="/about" component={About} />
            </div>
          </Router>
        )
    }
}

module.exports = App