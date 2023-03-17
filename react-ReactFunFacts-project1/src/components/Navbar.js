import React from "react";
import ReactLogo from "../images/React-icon.svg.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={ReactLogo} alt="" />
                <h2>ReactFacts</h2>
            </div>
            <p>React Course - Project 1</p>
        </div>
    )
}

export default Navbar;