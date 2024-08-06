import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginpopUp = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign up")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className="login-popup-inputs">
                    {currentState === "Log in" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{currentState === "Sign up" ? "Create account" : "Log in"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the term of use and condition</p>
                </div>
                {currentState === "Log in"
                    ?<p>Create a new account?<span  onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
                    :<p>Already have an account?<span onClick={()=>setCurrentState("Log in")}>Login here</span></p>
                    
                }
            </form>
        </div>
    )
}

export default LoginpopUp