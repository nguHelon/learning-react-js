import React from "react";
import image from "../images/Minimalist-Wallpaper-4K-High-Resolution.jpg";

const Main = () => {
    return (
        <div className="main-content">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="user-info">
                <h1>Ngu Helon</h1>
                <h3>Fullstack developer</h3>
                <p>stay Positive</p>
                <div className="buttons">
                    <button>GitHub</button>
                    <button>PortFolio</button>
                </div>
            </div>
            <div className="more-info">
                <div className="info-detail">
                    <h2>About</h2>
                    <p>Right Now this project is to learn more about react js. I am aspiring to become a fullstack developer, and the goal is to write code that affect the lifes of others positively</p>
                </div>
                <div className="info-detail">
                    <h2>Personality</h2>
                    <p>Right Now this project is to learn more about react js. I am aspiring to become a fullstack developer, and the goal is to write code that affect the lifes of others positively</p>
                </div>
            </div>
        </div>
    )
}

export default Main;