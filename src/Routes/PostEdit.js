import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import PostForm from "../Components/PostForm";
import apiUrl from "../apiConfig";

function PostEdit() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [post, setPost] = useState({
        title: '',
        name: '',
        link: '',
        content: ''
    })
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(`${apiUrl}/posts/${id}`)
                setPost(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const handleChange = (event) => {
        const updatedField = { [event.target.name]: event.target.value }
        const editedPost = Object.assign(post, updatedField)
        setPost(editedPost)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            url: `${apiUrl}/posts/${id}`,
            method: 'PUT',
            data: post
        }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if (updated) {
            return navigate(`/posts/${id}`)
        }
    })

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

    return (
        <div className="edit-post">
            <p>Edit post:</p><h4>Type only in the fields you wish to change</h4>
            <PostForm
                post={post}
                handleChange={(e) => handleChange(e)}
                handleSubmit={(e) => handleSubmit(e)}
                cancelPath={`/posts/${id}`}
            />
        </div>
    )
}

export default PostEdit