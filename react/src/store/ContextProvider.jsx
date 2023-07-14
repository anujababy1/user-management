import {createContext, useState } from "react";

const StateContext = createContext({
    currenrUser:null,
    token:null,
    setTokenHandler:()=>{},
    setUserHandler:()=>{}
});

export const ContextProvider = (props)=>{
    

    const [user,setUser] = useState({});
    const [token,setToken] = useState(localStorage.getItem('token'));

    function setTokenHandler(token){
        setToken(token);
        if(token){
            localStorage.setItem('token',token);
        }else{
            localStorage.removeItem('token');
        }
    }

    function setUserHandler(user){
        setUser(user);
    }


    return (
        <StateContext.Provider value={ {
            token,
            user,
            setUserHandler,
            setTokenHandler,
        } }>
             {props.children}
        </StateContext.Provider>
        
    )
}

export default StateContext;