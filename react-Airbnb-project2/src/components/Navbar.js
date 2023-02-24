import React from "react";
import AirbnbLogo from "../images/airbnb.png";

const Navbar = () => {
    return (
        <nav>
            <div className="img">
                <img src={AirbnbLogo} alt="" />
            </div>
        </nav>
    )
}

export default Navbar;