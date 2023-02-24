import React from "react";
import person from "../images/person.jpg";
import redstar from "../images/redstar.png";

const Card = () => {
    return (
        <div className="card-item">
            <div className="img">
                <img src={person} alt="" />
                <p>SOLD OUT</p>
            </div>
            <div className="card-info">
                <div className="card-rating">
                    <img src={redstar} alt="" />
                    <p>
                        <span>5.0</span>
                        <span>(5)</span>
                        <span></span>
                        <span>USA</span>
                    </p>
                </div>
                <div className="more-info">
                    <p>Life lessons with Ngu Helon</p>
                    <p><b>From $138</b>/person</p>
                </div>
            </div>
        </div>
    )
}

export default Card;