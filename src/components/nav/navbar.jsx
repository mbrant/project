"use strict"

import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" onClick={props.toggleCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">rlephant</Link>
            </div>
            <div className={(props.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-nav ml-auto">
                        <a href="/" className="nav-link">{props.navCollapsed}</a>    
                    </li>
                    <li className="navbar-nav ml-auto">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="navbar-nav ml-auto">
                        <a href="/" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

module.exports = NavBar