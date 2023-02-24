import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Props from "./components/Props";
import "./App.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                <Card />
            </div>
            <div className="card-container">
                <Props
                    img="./images/person.jpg"
                    name="Ngu helon"
                />
                <Props
                    img="./images/person1.jpg"
                    name="John Doe"
                />
                <Props
                    img="./images/person2.jpg"
                    name="Mary smidler"
                />
                <Props
                    img="./images/person3.jpg"
                    name="anthony green"
                />
            </div>
        </div>
    )
}

export default App;