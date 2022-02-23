import { useState, useEffect } from "react";
import { Grid } from "@mui/material"
import FeaturedArticle from "../components/FeaturedArticle";
import api from "../components/api";

const Home = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetchArticles();        
    },[])

    const fetchArticles = async() => {
        try {
            const articlesList = await api.get("/post/list")
            setArticles(articlesList.data.data)
        } catch (err) {
            console.log(err)
            setArticles([])
        }
    }
    return (
        <Grid container spacing={4}>
        {articles.map(post => {
            return <FeaturedArticle key={post._id} article={post}/>
        })}
        </Grid>
        
    )
}

export default Home