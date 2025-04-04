import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import './Login.css'

const Login = ({open, setOpen, register, setRegister}) => {
    

    const close = () => {
        setOpen(false);
        setRegister(false);
    }
    return (
        <div className={`login-container ${open ? "open" : ""}`} >
            <div className='login-content'>
                <span className="close" onClick={() => close()}><FaWindowClose /></span>
                <h2 className="login-title">{register ? "Sign up" : "Login"}</h2>
                <form className='login'>
                    {register && <input className='input-name' type="text" placeholder="Name" />}
                    <input className='input-email' type="text" placeholder="Email" />
                    <input className='input-password' type="password" placeholder="Password" />
                    {register && <div className='button btn-work btn-login '>Register</div>}
                    {!register && <div className='button btn-work btn-login '>Login</div>}
                    {register && <div>Already have an account? <span className='btn-signup' onClick={() => setRegister(false)}>Login</span></div>}
                    {!register && <div>Dont have an account? <span className='btn-signup' onClick={() => setRegister(true)}>Sign up</span></div>}
                </form>
            </div>
        </div>
    );
};

export default Login;