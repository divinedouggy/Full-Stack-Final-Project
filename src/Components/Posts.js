import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import apiUrl from "../apiConfig";

function Posts() {
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
        return <div className="sidebar-posts" key={post.id}>
            <NavLink to={`/posts/${post._id}`}>
                <p>{post.title}</p>
            </NavLink>
            <div className="by"><p>by {post.name}</p></div>
        </div>
    })

    return (
        <div className="sidebar" >
            <h1>Posts</h1>
            <div className="side-posts-height">
            <ul>
                {postsData}
            </ul>
            </div>
            <div className="go-to-posts"><NavLink to='/posts-all'>Go to Posts</NavLink></div>
            {isLoading ? <p>Loading...</p> : <></>}
        </div>
    )
}

export default Posts