import React, { useState } from 'react'

const Postform = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const post = { title, body }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea name="body" onChange={(e) => setBody(e.target.value)} value={body} />
                </div>
                <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Postform;