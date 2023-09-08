import React from 'react';
import "./Login.css";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/userSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

const provider = new GoogleAuthProvider();

function Login() {

  const dispatch = useDispatch();

  const userLogin = ()=>{
    signInWithPopup(auth, provider)
    .then(({user})=>{
      console.log(user);
      dispatch(signIn({
        displayName : user.displayName,
        fromEmail : user.email,
        photoURL : user.photoURL
      }));
    })
    .catch((error)=>{
      console.error(error.message);
    })
  }

  return (
    <div className='login'>
        <div className='login-box'>
          <img src='https://cdn.vox-cdn.com/thumbor/x1-9UwiB_BeLufaPfDTRaLrACBo=/0x0:1320x880/1200x628/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' alt='login-logo' />
          <button onClick={userLogin}>Login with Gmail</button>
        </div>
    </div>
  )
}

export default Login;