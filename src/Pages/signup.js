import React from "react";
import "../styles/Form.css";
import { Link } from 'react-router-dom'; 
import { useRef } from "react";
import { colors } from "@material-ui/core";

function SignUp() {
  let fname = useRef();
  let femail = useRef();
  let ftext = useRef();
  let Username = useRef();
  let Password = useRef();
  let Password2 = useRef();


  function submithandler(event) {
    event.preventDefault();
    let nameE = fname.current.value;
    let emailE = femail.current.value;
    let textE = ftext.current.value;
    let usser = Username.current.value;
    let passs= Password.current.value;
    let passs2 = Password2.current.value;

    console.log(nameE);
  }

  return (
    <div className='form-content-right'>
    <div className="contact">
      <div
        className="leftSide"
       //style={{ backgroundImage: `url(${bkimg})` }}
      ></div>
      <div>
        <form onSubmit={submithandler} className='form-css' >
        <h2 className="header-1">
          Get started with us today! Create your account by filling out the
          information below.
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            required
            placeholder='Enter your username'
            ref={Username}
          />
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            required
            placeholder='Enter your email'
            ref={femail}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='fullname'
            required
            placeholder='Enter your Full name'
            ref={fname}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            required
            placeholder='Enter your password'
            ref={Password}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            required
            placeholder='Confirm your password'
            ref={Password2}
          />
        </div >
        <Link to="/Login">
        <button className='form-input-btn' type='submit'>Sign up</button>
        </Link>
        <span className='form-input-login'>
          Already have an account? Login <Link to="/login">here</Link>
        </span>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
