"use strict"

import React, {Component} from 'react'
import contactService from '../../services/contact.service'


class Home extends Component {
    constructor(){
        super()

        this.state = {
            name: null,
            email: null,
            phone: null,
            company: null
        }

    this._handleName = this
        ._handleName
        .bind(this)
    this._handleEmail = this
        ._handleEmail
        .bind(this)
    this._handlePhone = this
        ._handlePhone
        .bind(this)
    this._handleCompany = this
        ._handleCompany
        .bind(this)
    this._onSubmit = this
        ._onSubmit
        .bind(this)
        
    }

    _onSubmit() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            company: this.state.company
        }
        return contactService
            .test(data)
            .then(response => {
                console.log(response)
                $('form')[0].reset()

            })
            .catch(err => {
                console.log(err)
            })
    }

    _handleName(e) {
        this.setState({name: e.target.value})
    }

    _handleEmail(e) {
        this.setState({email: e.target.value})
    }

    _handlePhone(e) {
        this.setState({phone: e.target.value})
    }

    _handleCompany(e) {
        this.setState({company: e.target.value})
    }

    render(){
    return (
        <header id="home-section">
            <div className="dark-overlay">
                <div className="home-inner container">
                    <div className="row">
                        <div className="col-lg-8">
                                    <h4 className="text-center">Building your dream site shouldn't have to feel like climbing a mountain</h4>
                            <div
                                style={{
                                height: 100
                            }}/>
                            <div className="row">
                                <div className="col-lg-4">
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="card bg-primary text-center card-form">
                                <div className="card-body">
                                    <h3>Get Started</h3>
                                    <p>We'll contact you today</p>
                                    <form id="quoteForm">
                                        <div className="form-group">
                                            <input
                                                onChange={this._handleName}
                                                type="text"
                                                placeholder="Name"
                                                className="form-control-lg"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={this._handleEmail}
                                                type="email"
                                                placeholder="Email"
                                                className="form-control-lg"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={this._handlePhone}
                                                type="phone"
                                                placeholder="Phone"
                                                className="form-control-lg"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={this._handleCompany}
                                                type="text"
                                                placeholder="Company"
                                                className="form-control-lg"/>
                                        </div>
                                        <div
                                            style={{
                                            "paddingTop": "10px"
                                        }}/>
                                        <input
                                            onClick={this._onSubmit}
                                            type="text"
                                            className="btn btn-outline-light btn-block"
                                            value="Contact"
                                            readOnly/>
                                        <div
                                            style={{
                                            "paddingBottom": "5px"
                                        }}/>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
}

module.exports = Home