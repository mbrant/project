"use strict"

import React,{Component} from 'react'
import headshot from '../../../public/img/headshot.jpg'
import portfolioPic from '../../../public/img/portfolio.jpg'

class About extends Component {
    constructor(){
        super()

        this.state = {
            lastCollapsedDiv: 'home',
        }

        this._toggleCollapse = this._toggleCollapse.bind(this)

    }

    _toggleCollapse(triggerFromChild) {
        if (this.state.lastCollapsedDiv === triggerFromChild) {
            return
        } else {
            $(`#${this.state.lastCollapsedDiv}`).collapse('toggle')
            $(`#${triggerFromChild}`).collapse('toggle')
            this.setState({lastCollapsedDiv: triggerFromChild})
        }

    }

    render(){
    return (
        <div className="container">
            <section id="about-header">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-5">
                        <img src={headshot}/>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="d-flex flex-column">
                            <div className="p-5 bg-dark text-white">
                                <div className="name d-flex flex-row justify-content-between align-items-center">
                                    <h1 className="display-4">Our Team</h1>
                                    <div><i className="fa fa-twitter"></i></div>
                                    <div><i className="fa fa-facebook"></i></div>
                                    <div><i className="fa fa-instagram"></i></div>
                                    <div><i className="fa fa-github"></i></div>
                                </div>
                            </div>

                        <div className="p-4 bg-black">
                            Mikhail Brantveyn | Founder | Full Stack Web Developer
                        </div>
                        <div>
                            <div className="d-flex flex-row text-white align-items-stretch text-center">
                                <div onClick={() => this._toggleCollapse('home')} className="port-item p-4 bg-primary">
                                    <i className="fa fa-user d-block"></i>Profile
                                </div>
                                <div onClick={()=> this._toggleCollapse('resume')} className="port-item p-4 bg-success">
                                    <i className="fa fa-graduation-cap d-block"></i>Resume
                                </div>
                                <div onClick={()=> this._toggleCollapse('portfolio')} className="port-item p-4 bg-warning">
                                    <i className="fa fa-folder-open d-block"></i>Work
                                </div>
                                <div onClick={() => this._toggleCollapse('contact')} className="port-item p-4 bg-danger">
                                    <i className="fa fa-home d-block"></i>Contact
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={'collapse show'} id="home">
                <div className="card card-body bg-primary text-white py-5">
                    <h2>Hi I am Mikhail</h2>
                    <p className="lead">I've been a professional tech consultant for the last five years. Helping your business grow is my passion</p>
                </div>

                <div style={{color: 'black'}}className="card card-body py-5">
                    <h3>Technical</h3>
                    <p>Full Stack Web Development</p>
                    <hr/>
                    <h4>HTML5</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: '85%'}}></div>
                    </div>
                    <h4>CSS</h4>
                <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: '80%'}}></div>
            </div>
            <h4>JavaScript</h4>
                <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: '94%'}}></div>
            </div>
            <h4>Node</h4>
                <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: '90%'}}></div>
            </div>
            <h4>MongoDB</h4>
                <div className="progress mb-3">
                        <div className="progress-bar bg-success" style={{width: '92%'}}></div>
            </div>
                    
                </div>
            </div>


        <div className={'collapse'} id="resume">
            <div className="card card-body bg-success text-white py-5">
                <h2>Resume</h2>
                <p>US.Navy | rlephant | Heal and Recover</p>
            </div>
            <div className="card card-body py-5">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">rlephant</h4>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, veritatis!</p>
                            <p className="p-2 mb-3 bg-dark text-white">
                                Position: Founder | Full Stack Developer
                            </p>
                            <p className="p-2 mb-3 bg-dark text-white">
                                Phone: (444)444-4444
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">Dates: 2016-2018</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Heal and Recover</h4>
                            <p className="card-text"> Personal wellness tool and social network for trauma recovery</p>
                            <p className="p-2 mb-3 bg-dark text-white">
                                Position: Full Stack Developer
                            </p>
                            <p className="p-2 mb-3 bg-dark text-white">
                                Contact: Jane Giriard
                                Phone: (444)444-4444
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">Dates: 2017-2018</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">US Navy</h4>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, veritatis!</p>
                            <p className="p-2 mb-3 bg-dark text-white">
                                Position: Plant Operator
                            </p>
                            <p className="p-2 mb-3 bg-dark text-white">
                                Phone: (444)444-4444
                            </p>
                        </div>
                        <div className="card-footer">
                            <h6 className="text-muted">Dates: 2006-2010</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="portfolio" className="collapse">
            <div className="card card-body bg-warning py-5">
                <h3>Projects</h3>
            </div>

            <div className="card card-body py-5">
                <h3>Websites</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quod!</p>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={portfolioPic} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-3">

                </div>
            </div>
            </div>
        </div>




            
        <footer id="about-footer" className="p-5 bg-dark text-white">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="btn btn-outline-light"><i className="fa fa-cloud"></i> Download Resume</a>
                </div>
            </div>
        </footer>
        </div>
    )
}
} 


module.exports = About