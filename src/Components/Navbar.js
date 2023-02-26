import React from "react";
import './styles/navbar.css'
import icon from './images/page-icon.png'

export default function Navbar () {
    return (
        <div className="navbar">
            <div className="icon-title">
                <img src={icon} alt="icon" className="icon" />
                <p className="iconText">ARENA</p>
            </div>

            <div className="links">
                <div className="nav-links"><a href="/index.html">Home</a></div>
                <div className="nav-links"><a href="https://twitter.com/SreeSen03" target="_blank">Twitter</a></div>
            </div>
        </div>
    )
}