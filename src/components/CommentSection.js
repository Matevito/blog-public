import { useState } from "react"
import { Typography } from "@mui/material"
import CommentPaper from "./CommentPaper";

const CommentSection = (props) => {
    const publishComment = props.publishComment;
    const comments = props.comments

    const [text, setText] = useState();

    const handleText = (event) => {
        setText(event.target.value)
    }
    const handleForm = () => {
        const newComment = {
            text
        }
        publishComment(newComment);
    }
    if (comments === undefined) {
        return (
            <div>loading comments...</div>
        )
    } else {
        return (
            <div  style={{ padding: 14 }}>
                <Typography variant="h5">Comment Section</Typography>
                {comments.length !== 0 ? comments.map((comment) => {return <CommentPaper key={comment._id} comment={comment} />}) :
                    <div>There are no comments yet. Publish one!</div>}
            </div>
        )
    }
}

export default CommentSection;