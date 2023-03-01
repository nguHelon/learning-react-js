import React from "react";
import memesArray from "../memesData";

const Meme = () => {
    let [memeImage, setMemeImage] = React.useState("");
    function preventSubmission(e) {
        e.preventDefault();
    }

    function getMemeImage() {
        let random = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[random].url);
    }

    return (
        <div className="form-div">
            <form className="form" onSubmit={preventSubmission}>
                <div className="inputs">
                    <input type="text"></input>
                    <input type="text"></input>
                </div>
                <button onClick={getMemeImage}>Get a new image 🔲 </button>
            </form>
            <img src={memeImage} alt="" />
        </div>
    )
}

export default Meme;