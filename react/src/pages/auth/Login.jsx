import { useRef,useState } from "react";
import {Link} from 'react-router-dom';
const Login = ()=>{

    const [message,setMessage] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (e)=>{
        e.preventDefault();
        const payload = {
            
        }
    }

    return (
        <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>

          {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }

          <input ref={emailRef} type="email" placeholder="Email"/>
          <input ref={passwordRef} type="password" placeholder="Password"/>
          <button className="btn btn-block">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
    )

};

export default Login;