import React from "react";
import "../styles/Login.css";
import bkimg from "../assets/signin.svg";
import { useRef } from "react";
import { Link } from 'react-router-dom'; 
import { colors } from "@material-ui/core";

function Login() {
  let fname = useRef();
  let femail = useRef();
  let ftext = useRef();

  function submithandler(event) {
    event.preventDefault();
    let nameE = fname.current.value;
    let emailE = femail.current.value;
    let textE = ftext.current.value;
    console.log(nameE);
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${bkimg})` }}
      ></div>
      <div className="rightSide">
        <form onSubmit={submithandler}>
        <h2>Sign in</h2>

          <label className='form-label-login'>Username</label>
          <input className="form-input" type="text" required placeholder="Required to enter your Username" ref={fname} />
          <label className="form-label-login"> Password </label>
          <input className="form-input" type="text" required placeholder="Reqired to enter a password" ref={femail}  />
          <Link to="/">
          <button type="submit" className="signinbtn">Sign in </button>
          </Link>
          <span className='registerlink'>
          Don't have an account? Register <Link to="/signup">here</Link>
        </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
