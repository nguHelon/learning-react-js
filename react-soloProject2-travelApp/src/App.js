import React from "react";
import Header from "./components/header";
import Travel from "./components/travelItem";
import travel from "./components/data";
import "./App.css";

const App = () => {
    let travelComps = travel.map((item) => {
        return <Travel
            Key={item.id}
            {...item}
        />
    })

    return (
        <div className="container">
            <div className="contents">
                <Header />
                <div className="travel-div">
                    {travelComps}
                </div>
            </div>
        </div>
    )
}

export default App;