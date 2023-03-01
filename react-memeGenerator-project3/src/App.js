import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <div className="meme-container">
                <Header />
                <Meme />
            </div>
        </div>
    )
}

export default App;