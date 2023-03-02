import React from "react";
import memesArray from "../memesData";

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesArray);

    function preventSubmission(e) {
        e.preventDefault();
    }

    function getMemeImage() {
        let random = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[random].url
        setMeme((prevMeme) => {
            return ({
                ...prevMeme,
                randomImage: url
            })
        });
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
            <img src={meme.randomImage} alt="" />
        </div>
    )
}

export default Meme;