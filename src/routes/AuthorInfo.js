import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Divider, Card, CardContent, CardActionArea } from "@mui/material";

import api from "../components/api";

const ArticlePage = ({ article }) => {
    const navigate = useNavigate();
    const redirectArticle = (event) => {
        event.preventDefault();
        navigate(`/article/${article._id}`)
    }
    if (!article) {
        return <div>Loading post ...</div>
    } else {
        return (
            <Grid item xs={12} md={12}>
                <CardActionArea component="a" href="#" onClick={redirectArticle}>
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        
                        <Typography
                            gutterBottom={true}
                            variant="subtitle1"
                            component="h5"
                        >
                            <b>Article: </b>{article.title}
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
}

const AuthorInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [authorInfo, setAuthorInfo] = useState();
    useEffect(() => {
        getAuthorInfo();
    }, [])

    const getAuthorInfo = async () => {
        try {
            const authorInfo = await api.get(`/user/${id}`);
            setAuthorInfo(authorInfo.data.data);
            console.log(authorInfo.data.data.posts[0])
        } catch (err) {
            console.log(err)
            // send to 404 page
            navigate("/");
        }
    }

    if (!authorInfo) {
        return <div>Loading author info...</div>
    } else {
        return(
            <Grid container justifyContent="left">
                <Box
                            sx={{
                                marginTop:2,
                                mx:"auto",
                                display:"flex",
                                flexDirection:"column"
                            }}
                >
                    <Typography

                    >
                        <b>About {authorInfo.username}:</b>
                    </Typography>
                    <Typography

                    >
                        {authorInfo.bio}
                    </Typography>
                    <Divider />

                    <Typography

                    >
                        <b>Name: </b>{authorInfo.displayName}
                    </Typography>

                    <Typography

                    >
                        <b>Published articles: </b>{authorInfo.posts.length}
                    </Typography>

                    <Divider />

                    <Typography
                        component="h3" variant="h6"
                    >
                        Articles published: 
                    </Typography>
                    <Grid >
                        {authorInfo.posts.map(post => {
                            return <ArticlePage key={post._id} article={post}/>
                        })}
                    </Grid>
                </Box>
            </Grid>
        )
    }
}

export default AuthorInfo;