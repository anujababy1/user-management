import { useContext } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
 import StateContext from "../../store/ContextProvider";
const DefaultLayout = ()=>{
    
    const ctx = useContext(StateContext); 

    if(!ctx.token){
       return <Navigate to='/login'></Navigate>
    }

    const onLogout = (e)=>{
        e.preventDefault;
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