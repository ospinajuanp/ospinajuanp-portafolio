import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import './Login.css'

const Login = ({open, setOpen, register, setRegister}) => {
    

  const close = () => {
    setOpen(false);
    setRegister(false);
    clearPassword()
    }
    const btnLogin = () => {
      setRegister(false)
    }

    const clearPassword = () => {
      document.getElementsByClassName('input-password')[0].value = ""
      document.getElementsByClassName('input-name')[0].value = ""
      document.getElementsByClassName('input-email')[0].value = ""
    }

    const btnRegister = () => {
      clearPassword()
      setRegister(true)
    }

    const loginFetch = async () => {
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: document.getElementsByClassName('input-email')[0].value,
              password: document.getElementsByClassName('input-password')[0].value
            })
          });
      
          const data = await res.json();
          if (data.status == 200 ){
            close()
          }
          console.log(data);
        } catch (error) {
          console.error("Error:", error.message);
        }
    }

    const registerFetch = async () => {
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: document.getElementsByClassName('input-name')[0].value,
            email: document.getElementsByClassName('input-email')[0].value,
            password: document.getElementsByClassName('input-password')[0].value
          })
        });
    
        const data = await res.json();
        console.log(data);
        if (data.status == 200 ){
          close()
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
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
                    {register && <div className='button btn-work btn-login ' onClick={() => registerFetch()}>Register</div>}
                    {!register && <div className='button btn-work btn-login ' onClick={() => loginFetch()}>Login</div>}
                    {register && <div>Already have an account? <span className='btn-signup' onClick={() => btnLogin()}>Login</span></div>}
                    {!register && <div>Dont have an account? <span className='btn-signup' onClick={() => btnRegister()}>Sign up</span></div>}
                </form>
            </div>
        </div>
    );
};

export default Login;