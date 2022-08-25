import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import apiUrl from "../apiConfig";

function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false) 

    const fetchData = async () => {
        // setIsLoading(true)
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
        return <li key={post.id}>
            <NavLink to={`/posts/${post._id}`}>{post.title}</NavLink>
        </li>
    })

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {postsData}
            </ul>
            {isLoading ? <p>Loading...</p> : <p></p>}
        </div>
    )
}

export default Posts