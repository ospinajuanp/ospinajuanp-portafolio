import { Link } from "react-router-dom";

const BlogPost = () => {
    return (
        <div>
            <Link to="/adminblogpost"> AdminBlog</Link>
            <h1>Mi Nueva Página</h1>
            <p>Contenido de la nueva página</p>
        </div>
    );
};

export default BlogPost;