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

    useEffect(() => {
        const sidebar = document.querySelector('.lay-sidebar ')
        sidebar.style.display = "none"
        const layout = document.querySelector('.layout')
        layout.style.display = "flex"
        layout.style.flexDirection = "column"
   
        return () => {
            sidebar.style.display = "block"
            layout.style.display = "grid"
        };
    });

    return(
        <div className="create-post">
            <p>Write a new post:</p>
            <PostForm
            post={post}
            handleChange={(e) => handleChange(e)}
            handleSubmit={(e) => handleSubmit(e)}
            cancelPath='/posts-all'
            />
        </div>
    )
}

export default PostCreate