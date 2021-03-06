import React, { Component } from 'react'
import { Link } from "react-router-dom"

import "./Navbar.css"
import MobileLogo from "../../Assets/img/VA.png"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div id="navigation">
                <div id="mobilenavigation">
                    {/* <img src={MobileLogo} id="mobileLogo" alt="VA Logo"></img> */}
                    <div id="burger" onClick={this.handleClick}>
                        <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>
                <div className={this.state.clicked ? 'navbar active' : 'navbar'}>
                    <Link to="/" className="navlinks" onClick={this.handleClick}>Home</Link>
                    <Link to="/story" className="navlinks" onClick={this.handleClick}>Our Story</Link>
                    <Link to="/party" className="navlinks" onClick={this.handleClick}>Wedding Party</Link>
                    <Link to="/travel" className="navlinks" onClick={this.handleClick}>Travel</Link>
                    <Link to="/thingstodo" className="navlinks" onClick={this.handleClick}>Things to Do</Link>
                    <a className="navlinks" onClick={this.handleClick} href="https://www.zola.com/wedding/valcantara/registry" target="_blank">Registry</a>
                    <a className="navlinks" onClick={this.handleClick} href="https://www.zola.com/wedding/valcantara/rsvp" target="_blank">RSVP</a>
                </div>
            </div>
        )
    }
}


export default Navbar