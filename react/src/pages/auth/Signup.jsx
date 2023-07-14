import { useRef, useState } from "react";
import {Link} from 'react-router-dom';
const Signup = ()=>{

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors,setError] = useState(null);


    const onSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Signup for Free</h1>
          {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
          <input ref={nameRef} type="text" placeholder="Full Name"/>
          <input ref={emailRef} type="email" placeholder="Email Address"/>
          <input ref={passwordRef} type="password" placeholder="Password"/>
          <input ref={passwordConfirmationRef} type="password" placeholder="Repeat Password"/>
          <button className="btn btn-block">Signup</button>
          <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
        </form>
      </div>
    </div>
    )

};

export default Signup;