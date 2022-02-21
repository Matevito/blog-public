import { useState } from "react"
import { Typography, TextField, Button, Paper, Divider } from "@mui/material"
import CommentPaper from "./CommentPaper";

const CommentSection = (props) => {
    const publishComment = props.publishComment;
    const comments = props.comments

    const [text, setText] = useState("");

    const handleText = (event) => {
        setText(event.target.value)
    }
    const handleForm = (event) => {
        event.preventDefault();
        const newComment = {
            text
        }
        setText("");
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
                <Paper style={{ padding: "20px 15px" }} >
                    <form onSubmit={handleForm}>
                        <TextField
                            fullWidth
                            label="Comment"
                            value={text}
                            onChange={handleText}
                        >
                        </TextField>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                        >
                            Publish comment
                        </Button>
                    </form>
                </Paper>
                <Divider variant="fullWidth" style={{ margin: "20px 0" }} />
                {comments.length !== 0 ? comments.map((comment) => {return <CommentPaper key={comment._id} comment={comment} />}) :
                    <div>There are no comments yet. Publish one!</div>}
            </div>
        )
    }
}

export default CommentSection;