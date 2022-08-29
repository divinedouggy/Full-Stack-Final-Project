import { Link } from 'react-router-dom';

const PostForm = ({ post, handleSubmit, handleChange, cancelPath }) => {
    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>
         
            <input
                placeholder="Subject"
                defaultValue={post.title}
                name="title"
                onChange={(e) => handleChange(e)} />

            <input
                placeholder="Your Name"
                defaultValue={post.name}
                name="name"
                onChange={(e) => handleChange(e)} />

            <input
                placeholder="Website (not required)"
                defaultValue={post.url}
                name="url"
                onChange={(e) => handleChange(e)} />

            <input
                placeholder="Comment"
                defaultValue={post.content}
                name="content"
                onChange={(e) => handleChange(e)} />

                <div className='post-form-buttons'>
            <button type="submit">Submit</button>

            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
            </div>
        </form>
        </div>
    )
}

export default PostForm