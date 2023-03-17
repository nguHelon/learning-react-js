import React from "react";
import "./App.css"

export default function App() {
    let [count, setCount] = React.useState(0);
    function incState() {
        setCount(prevCount => prevCount + 1);
    }
    function decState() {
        setCount(prevCount => prevCount - 1);
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={decState}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={incState}>+</button>
        </div>
    )
}
