import { useContext,useEffect } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import StateContext from "../../store/ContextProvider";
import axiosClient from "../../axios-client";
const DefaultLayout = ()=>{
    
    const ctx = useContext(StateContext); 

    useEffect(()=>{
        async function getAuthenticateduser(){
            try {
                const response = await axiosClient.get('/user');
                ctx.setUserHandler(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAuthenticateduser();
    },[]);

    if(!ctx.token){
       return <Navigate to='/login'></Navigate>
    }

    const onLogout = async (e)=>{
        e.preventDefault;

        try {
            const response = await axiosClient.post('/logout');
            ctx.setTokenHandler(null);
            ctx.setUserHandler(null);
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                <div>
                    Header
                </div>

                <div>
                    {ctx.user.name} &nbsp; &nbsp;
                    <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
                </div>
                </header>
                <main>
                <Outlet/>
                </main>
                {/* {notification &&
                <div className="notification">
                    {notification}
                </div>
                } */}
            </div>
    </div>
    )
}

export default DefaultLayout;