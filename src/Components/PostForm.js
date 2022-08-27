import { Link } from 'react-router-dom';

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
         
            <input
                placeholder="post title"
                defaultValue={post.title}
                name="title"
                onChange={(e) => handleChange(e)} />

            <input
                placeholder="your name"
                defaultValue={post.name}
                name="name"
                onChange={(e) => handleChange(e)} />

            <input
                placeholder="your website"
                defaultValue={post.url}
                name="url"
                onChange={(e) => handleChange(e)} />

            <input
                placeholder="write a comment"
                defaultValue={post.content}
                name="content"
                onChange={(e) => handleChange(e)} />

            <button type="submit">Submit</button>

            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
        </form>
    )
}

export default PostForm