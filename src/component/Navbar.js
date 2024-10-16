import React from "react";
import logo from "../logoimages/globe.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="navbar--logo"/>
            <h1 className="navbar--title">my travel journal</h1>
        </nav>
    )
}