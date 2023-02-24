import React from "react";
import person from "../images/person.jpg"

const Props = () => {

    return (
        <div className="card-item">
            <div className="img">
                <img src={person} alt="" />
            </div>
            <h3>Ngu Helon</h3>
            <div className="card-info">
                <div className="card-rating">
                    <p>Phone: </p>
                    <span>+237 82 75 14 41</span>
                </div>
                <div className="more-info">
                    <p>Email: </p>
                    <span>nguhelon@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Props;