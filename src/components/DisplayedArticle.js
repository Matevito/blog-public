import { useNavigate } from "react-router-dom";
import { Grid, Typography, Link } from  "@mui/material"
import parseDate from "./parseDate";

const InjectArticle = ({ articleText }) => {
    if (!articleText) {
        return (
            <>Loading article...</>
        )
    } else {
        return (
            <div
                contentEditable="true"
                dangerouslySetInnerHTML={{ __html: articleText}}
            >
            </div>
        )
    }
} 

const DisplayedArticle = ({ article }) => {
    const title = article.title;
    const timeStamp = parseDate(article.timeStamp);
    const author = article.author;
    const articleContent = article.text;
    const navigate = useNavigate();
    /*
        1. stamp with title, author and date    
        2. article text!
    */
    const navigateToAuthor = () => {
        
        navigate(`/author/${author._id}`)
    }
    return (
        <Grid
        >
            <Typography 
                gutterBottom={true}
                variant="h4"
                component="h1"
            >
            {title}
            </Typography>

            <Typography 
                variant="subtitle1"
                gutterBottom={true}
            >
            {timeStamp} by <Link 
                underline="hover"
                terget="_blank"
                onClick={() => {
                    navigateToAuthor();
                }}
            >
                    {author.username}
                </Link>
            </Typography>
            <InjectArticle articleText={articleContent} />
        </Grid>
    )
}

export default DisplayedArticle;