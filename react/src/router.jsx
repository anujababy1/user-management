import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Users from "./pages/Users/Index";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/layouts/DefaultLayout";
import GuestLayout from "./components/layouts/GuestLayout";
import Dashboard from "./pages/Dashboard";
import UserForm from "./pages/Users/UserForm";

const router = createBrowserRouter([
    {   path:'/',
        element:<DefaultLayout/>,
        children:[
            { path:'/',element: <Navigate to="/dashboard"/> },
            { path:'/dashboard',element:<Dashboard/> },
            { path:'/users',element:<Users/> },
            { path:'/users/create',element:<UserForm/> },
            { path:'/users/:id',element:<UserForm/> },
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            { path:'/login',element:<Login/> },
            { path:'/signup',element:<Signup/> },
        ]
    },
   
   
    { path:'*',element:<NotFound/> }
]);
export default router;