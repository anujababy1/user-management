import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../../store/ContextProvider";

const GuestLayout = ()=>{

    const ctx = useContext(StateContext); 

    if(ctx.token){
       return <Navigate to='/dashboard'></Navigate>
    }

    return (
    <>
    <Outlet/>
    </>
    )
}

export default GuestLayout;