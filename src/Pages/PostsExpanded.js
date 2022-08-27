import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import apiUrl from "../apiConfig";

function PostsExpanded() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios(`${apiUrl}/posts`)
            setPosts(response.data.posts)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const postsData = posts.map((post) => {
        return <div key={post.id}>
            <NavLink to={`/posts/${post._id}`}><p>{post.title}</p></NavLink>
            <a href={post.url}>{post.name}</a>
            <p>"{post.content}"</p>
        </div>
    })

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {postsData}
            </ul>
            <NavLink to={'/create-post'} >
                <button>New Post</button>
            </NavLink>
            {isLoading ? <p>Loading...</p> : <></>}
        </div>
    )
}

export default PostsExpanded