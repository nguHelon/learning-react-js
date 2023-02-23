import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <div className="div-container">
                <Main />
                <Footer />
            </div>
        </div>
    )
}

export default App;