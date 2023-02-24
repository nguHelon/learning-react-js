import React from "react";
import photogrid from "../images/photogrid.jpg";

const Hero = () => {
    return (
        <div className="Hero">
            <div className="img">
                <img src={photogrid} alt="" />
            </div>
            <div className="hero-info">
                <div className="hero-content">
                    <h1>Online Experiences</h1>
                    <p>
                        Join unique interactive activities led by one-of-a-word hosts--all without leaving home.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;