import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup' id='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img  onClick ={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
          
          <input type="email" name="" id="" placeholder='Your email' required/>
          <input type="password" placeholder='password' required />
        </div>
        <button>{currentState === "Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id=""required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"? <p>Create a new  account? <span onClick={() => setCurrentState("Sign Up")}>click here</span></p>: <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>}
       
       
      </form>
    </div>
  )
}

export default LoginPopup