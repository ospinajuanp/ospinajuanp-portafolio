import { Link } from "react-router-dom";

const BlogPost = () => {
    return (
        <div>
            <h1>Blog</h1>
            <Link to="/adminblogpost">Go AdminBlog</Link>
        </div>
    );
};

export default BlogPost;