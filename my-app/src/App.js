import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./App.css"

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}

export default App;