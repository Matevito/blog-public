import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Box, Divider } from "@mui/material"
import DisplayedArticle from "../components/DisplayedArticle";
import CommentSection from "../components/CommentSection";
import api from "../components/api";

const Article = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        getArticle();
        getComments();
    }, [])

    const getArticle = async () => {
        try {
            const articleResponse = await api.get(`/post/${id}`);
            setArticle(articleResponse.data.data);
        } catch (err) {
            console.log(err)
            // redirect to 404 page!
            navigate("/")
        }
    }
    const getComments = async () => {
        try {
            const commentsResponse = await api.get(`/post/${id}/comment/list`)
            setComments(commentsResponse.data.data)
        } catch (err) {
            console.log(err)
            // redirect to 404 page!
            navigate("/")
        }
    }

    const publishComment = () => {
        //todo:
        // api route: `/post/${id}/comment`, { message:check the name! }
    }
    if (!article && !comments) {
        return (
            <div>Loading info...</div>
        )
    } else {
        return (
            <Grid container justifyContent="center" >
                <Box
                            sx={{
                                marginTop:2,
                                mx:"auto",
                                display:"flex",
                                flexDirection:"column",
                            }}
                >
                <DisplayedArticle article={article}/>
                <Divider />
                <p></p>
                <CommentSection comments={comments}/>
                </Box>
            </Grid>
        )
    }
};

export default Article;