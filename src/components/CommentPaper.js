import { Grid, Paper, Divider } from "@mui/material";
import parseDate from "./parseDate";

const CommentPaper = ({ comment }) => {
    const timeStamp = parseDate(comment.timeStamp)
    return (
        <>
            <Paper style={{ padding: "20px 15px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        
                        <p style={{ textAlign: "left" }}>
                        {comment.text}
                        </p>

                        <p style={{ textAlign: "left", color: "gray" }}>
                        {timeStamp}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
            <Divider variant="fullWidth" style={{ margin: "20px 0" }} />
        </>
    )
};

export default CommentPaper