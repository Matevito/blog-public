import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../components/api";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState();
    const [comments, setComments] = useState();
    useEffect(() => {
        getArticle();
    }, [])

    const getArticle = async () => {
        try {
            const articleResponse = await api.get(`/post/${id}`);
            setArticle(articleResponse.data.data);
        } catch (err) {
            console.log(err)
            // redirect to 404 page!
        }
    }
    const getComments = async () => {
        //todo:
    }

    return (
        <div>article page</div>
    )
};

export default Article;