import React from "react";
import person from "../images/person.jpg";
import redstar from "../images/redstar.png";

const Card = ({ stats: { reviewCount, rating }, location, title, price, openSpots }) => {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card-item">
            <div className="img">
                <img src={person} alt="" />
                {(badgeText === "SOLD OUT" && <p>{badgeText}</p>) || (badgeText === "ONLINE" && <p>{badgeText}</p>)}
            </div>
            <div className="card-info">
                <div className="card-rating">
                    <img src={redstar} alt="" />
                    <p>
                        <span>{rating}</span>
                        <span>({reviewCount})</span>
                        <span></span>
                        <span>{location}</span>
                    </p>
                </div>
                <div className="more-info">
                    <p>{title}</p>
                    <p><b>From ${price}</b>/person</p>
                </div>
            </div>
        </div>
    )
}

export default Card;