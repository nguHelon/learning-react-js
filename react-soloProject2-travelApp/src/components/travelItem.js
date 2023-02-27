import React from "react";

const Travel = ({ img, location, place, from, to, description }) => {
    return (
        <div className="travel-item">
            <div className="img">
                <img src={`images/${img}`} alt="" />
            </div>
            <div className="travel-info">
                <p className="location"><i className="fa-solid fa-location-dot"></i>{location} <span><u>View on google maps</u></span></p>
                <h2>{place}</h2>
                <p><b>{from} - 19 {to}</b></p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Travel;