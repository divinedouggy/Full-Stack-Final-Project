import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Layout from "../Components/Layout";
import apiUrl from "../apiConfig";

function Post() {
    const [post, setPost] = useState([])
    const [deleted, setDeleted] = useState(false)

    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios(`${apiUrl}/posts/${id}`)
                const result = response.data.post
                setPost(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    })


    return (<div>
        <h1>{post.title}</h1>
        <p>{post.name}</p>
        <p>{post.url}</p>
        <p>{post.content}</p>

        </div>
    )

}

export default Post