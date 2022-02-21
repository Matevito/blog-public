import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import api from "../components/api";

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
            console.log(authorInfo.data.data)
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
            <div>
                author bio and info.
            </div>
        )
    }
}

export default AuthorInfo;