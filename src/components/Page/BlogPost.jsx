import { Link } from "react-router-dom";
import { useState } from "react";
import Mode from "../Mode/Mode";
import Login from "../Login/Login";
import './BlogPost.css'

const BlogPost = () => {
    const [open, setOpen] = useState(false);
    const [register, setRegister] = useState(true);

    const signup = () => {
        setOpen(true);
        setRegister(true);
    }
    const login = () => {
        setOpen(true);
        setRegister(false);
    }
    
    return (
        <div>
            <Login open={open} setOpen={setOpen} register={register} setRegister={setRegister}/>
            <div className="login-button ">
                <div className="button btn-work" onClick={() => login()} > Login </div>
                <div className="button btn-work" onClick={() => signup()} > Sign up </div>
            </div>
            <Mode/>
            <h1>Blog</h1>
            <p>This page is under construction</p>
            <Link to="/adminblogpost">Go AdminBlog</Link>
        </div>
    );
};

export default BlogPost;