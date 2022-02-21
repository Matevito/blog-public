import { useState } from "react"
import { Typography } from "@mui/material"
import CommentPaper from "./CommentPaper";

const CommentSection = (props) => {
    const publishComment = props.publishComment;
    //const comments = props.comments

    // testing comments
    const comments = [
        {
            id:1, 
            text:"first one"
        },
        {
            id:2,
            text:"second"
        },
        {
            id:3,
            text:"some testing"
        }
    ]
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

    return (
        <div  style={{ padding: 14 }}>
            <Typography variant="h5">Comment Section</Typography>
            
            {comments.map((comment) => {
                return <CommentPaper key={comment._id} comment={comment} />
            })}
        </div>
    )
}

export default CommentSection;