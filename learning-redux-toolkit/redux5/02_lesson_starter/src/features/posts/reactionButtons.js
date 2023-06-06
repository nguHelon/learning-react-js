import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumpsUp: '👍',
    wow: '😮',
    heart: '💗',
    rocket: '🚀',
    coffee: '🍺'
}

const reactionButtons = ({ post }) => {
    return (
        <div>reactionButtons</div>
    )
}

export default reactionButtons