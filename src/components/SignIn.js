import React from 'react';
import { auth } from '../ChatConfig.js';
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button'
function SignIn() {
const provider = new GoogleAuthProvider();
function signInWithGoogle() {
     signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
  })
}

  
  return (
    <GoogleButton style={{width:'150px',height: 'auto'}}
    label='Se connecter'
    type="light" 
   onClick={signInWithGoogle}
   />
    )
}

export default SignIn
