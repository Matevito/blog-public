import { Grid, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import parseDate from "./parseDate"

const FeaturedArticle = ({ article }) => {
    const navigate = useNavigate();
    
    const redirectArticle = (event) => {
        event.preventDefault();
        navigate(`/article/${article._id}`)
    }
    return (
        <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#" onClick={redirectArticle}>
            <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>

                <Typography component="h2" variant="h5">
                {article.title}
                </Typography>

                <Typography variant="subtitle1" color="text.secondary">
                {parseDate(article.timeStamp)}
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" paragraph>
                <b>Author</b>: {article.author.username}
                </Typography>

                <Typography variant="subtitle1" color="primary">
                    Continue reading...
                </Typography>
            </CardContent>
            </Card>
        </CardActionArea>
    </Grid>
    )
}
export default FeaturedArticle;