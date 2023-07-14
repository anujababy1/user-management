import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
 import StateContext from "../../store/ContextProvider";
const DefaultLayout = ()=>{
    
    const ctx = useContext(StateContext); 

    if(!ctx.token){
       return <Navigate to='/login'></Navigate>
    }

    return (
    <>
        <Outlet/>
    </>
    )
}

export default DefaultLayout;