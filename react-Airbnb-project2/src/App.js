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
                    setup="I got my daughter a fridge for her anniversary"
                    punchline="I can't wait to see her face light up when she opens it"
                    upvotes={5}
                    downvotes={8}
                    comments={["yeah", "this", "is", "a", "comment"]}
                    bool={true}
                />
                <Props
                    setup="How did the hacker escape the police?"
                    punchline="He just ransomware"
                    upvotes={5}
                    downvotes={8}
                    comments={["yeah", "this", "is", "a", "comment"]}
                    bool={false}
                />
                <Props
                    setup="Why don't pirates travel on mountain roads?"
                    punchline="Scurvy"
                    upvotes={5}
                    downvotes={8}
                    comments={["yeah", "this", "is", "a", "comment"]}
                    bool={true}
                />
                <Props
                    setup="Why do bees stay in the hive in the winter?"
                    punchline="Swarm"
                    upvotes={5}
                    downvotes={8}
                    comments={["yeah", "this", "is", "a", "comment"]}
                    bool={false}
                />
                <Props
                    setup="What's the best thing about switzerland"
                    punchline="I don't know, but the flag is a big plus"
                    upvotes={5}
                    downvotes={8}
                    comments={["yeah", "this", "is", "a", "comment"]}
                    bool={true}
                />
            </div>
        </div>
    )
}

export default App;