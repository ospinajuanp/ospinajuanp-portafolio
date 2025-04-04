import { Link } from "react-router-dom";
import Mode from "../Mode/Mode";

const BlogPost = () => {
    return (
        <div>
            <Mode/>
            <h1>Blog</h1>
            <p>This page is under construction</p>
            <Link to="/adminblogpost">Go AdminBlog</Link>
        </div>
    );
};

export default BlogPost;