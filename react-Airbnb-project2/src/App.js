import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import experiences from "./components/data";
import "./App.css";

const App = () => {

    let allCards = experiences.map((experience) => {
        return <Card
            key={experience.id}
            {...experience}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                {allCards}
            </div>
        </div>
    )
}

export default App;