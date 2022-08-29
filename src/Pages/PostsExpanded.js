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
        return <div className="posts" key={post.id}>
            <NavLink to={`/posts/${post._id}`}><p>{post.title}</p></NavLink>
            <p>Posted by <a href={post.url} target="_blank">{post.name}</a></p>
            <p><i>"{post.content}"</i></p>
        </div>
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
        <div className="all-posts">
            <h1>All Posts</h1>
            <div className="new-post"><NavLink to={'/create-post'} >
                <h2>New Post</h2>
            </NavLink></div>
            <div>
                {postsData}
            </div>

            {isLoading ? <p>Loading...</p> : <></>}
        </div>
    )
}

export default PostsExpanded