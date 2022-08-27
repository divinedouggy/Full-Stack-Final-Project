import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import apiUrl from "../apiConfig";


function Post() {
    const [post, setPost] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
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
    }, [id])

    const destroy = () => {
        axios({
            url: `${apiUrl}/posts/${id}`,
            method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
    }

    useEffect(() => {
        if (deleted) {
            return navigate("/posts-all")
        }
    }, [deleted, navigate])

    useEffect(() => {
        if (!post) {
            return <p>Loading...</p>
        }
    }, [post])

    return (<div className="post">
        <h1>{post.title}</h1>
        <p>by <a href={post.url}>{post.name}</a></p>
        <p>{post.content}</p>
        {/* <img scr={trashcan} alt="Delete Post" /> */}
        <button onClick={() => destroy()}>Delete Post</button>

        <NavLink to={`/posts/${id}/edit`} >
            <button>Edit Post</button>
        </NavLink>

        <NavLink to="/posts-all">Back to posts</NavLink>
    </div>
    )
}

export default Post