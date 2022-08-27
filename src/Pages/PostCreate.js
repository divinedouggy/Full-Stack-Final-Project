import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../Components/PostForm";
import apiUrl from "../apiConfig";

function PostCreate() {

    const navigate = useNavigate();
    const [post, setPost] = useState({
        title:'',
        name:'',
        link:'',
        content:''
    })

    const [createdPost, setCreatedPost] = useState()

    const handleChange = (event) => {
        const updatedField = { [event.target.name]: event.target.value}
        const editedPost = Object.assign(post, updatedField)
        setPost(editedPost)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            url: `${apiUrl}/posts`,
            method: 'POST',
            data: post
        }).then(res => setCreatedPost(res.data.post)).catch(console.error)
    }

    useEffect(()=>{
        if (createdPost) {
            return navigate('/posts-all')
        }
    }, [createdPost, navigate])

    return(
        <div>
            Create Post:
            <PostForm
            post={post}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            cancelPath='/'
            />
        </div>
    )
}

export default PostCreate