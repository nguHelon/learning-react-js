import React from "react";
const Props = ({ setup, punchline, upvotes, downvotes, comments, bool }) => {
    function isPun(bool) {
        if (bool === true) {
            return "true"
        } else {
            return "false";
        }
    }
    return (
        <div>
            {setup && <p>Setup : <span>{setup}</span></p>}
            <p>Punchline : <span>{punchline}</span></p>
            <p>upvotes: <span>{upvotes}</span></p>
            <p>downvoteas: <span>{downvotes}</span></p>
            <div>
                <p>comments: </p>
                <div>{
                    comments.forEach((comment) => {
                        return comment;
                    })
                }</div>
            </div>
            <p>pun: <span>{isPun(bool)}</span></p>
        </div>
    )
}

export default Props;