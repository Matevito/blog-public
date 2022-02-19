import { useState, useEffect } from "react";
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
        <>todo home page....</>
    )
}

export default Home