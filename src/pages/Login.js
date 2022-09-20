import React from 'react'
import SignIn from '../components/SignIn'
import './Login.css'

const Login = () => {
  return (
    <div>
        <div className="logMain">
            <div className='logBtn'>
            <img src="https://www.training.bproodev.com/frontend/img/logo.png" alt="" />
            <SignIn />
            </div>
        </div>
    </div>
  )
}

export default Login