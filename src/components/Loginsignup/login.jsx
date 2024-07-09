import React,{useState} from 'react'
import './login.css'

import user_icon from '../Assets/user.jpeg'
import email_icon from '../Assets/mail.jpeg'
import pass_icon from '../Assets/pass.jpeg'
//mport { useState } from 'react'

const Login=() => {

  const [action,setAction]=useState("Login");

  return (
    
      <div className="cont">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="ips">
          {action==="Login"?<div></div>: <div className="ip">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='username' name='text' required/>
          </div>}
          
          <div className="ip">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='email' />
          </div>
          <div className="ip">
            <img src={pass_icon} alt="" />
            <input type="password" placeholder='password' />
          </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-pass">Lost Password? <span><a href="#">Click Here!</a></span></div>}
        
        <div className="sub-cont">
          <button className={action==="Login"?"sub gray": "sub"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
          <button className={action==="Sign Up"?"sub gray":"sub"} onClick={()=>{setAction("Login")}}>Login</button>
        </div>

      </div>
    
  )
}

export default Login

