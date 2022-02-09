import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import {auth,provider} from './firebase';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error)=>alert(error.message));

};

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIPYaBnSkP7fYubf3rFdq3cJsSOdeJEQmfFAavlAL3_ENHB1h4J9krDB70WAxEGbcBg&usqp=CAU"
          alt="discord logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
