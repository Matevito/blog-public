import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../components/api";

const Article = () => {
    const { id } = useParams();
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
        }
    }
    const getComments = async () => {
        try {
            const commentsResponse = await api.get(`/post/${id}/comment/list`)
            setComments(commentsResponse.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>article page</div>
    )
};

export default Article;