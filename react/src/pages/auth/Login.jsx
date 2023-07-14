import { useRef,useState ,useContext } from "react";
import {Link} from 'react-router-dom';
import StateContext from "../../store/ContextProvider";
import axiosClient from "../../axios-client";
const Login = ()=>{

    const [errors,setErrors] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const ctx = useContext(StateContext);

    const onSubmit = async (e)=>{
        e.preventDefault();
        const payload = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        };
        try {
            const response = await axiosClient.post('/login',payload);
            ctx.setTokenHandler(response.data.token);
            ctx.setUserHandler(response.data.user);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.message)
            }
        } 
    }

    return (
        <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>

          {errors &&
            <div className="alert">
              <p>{errors}</p>
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