import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SingUp from "../../Pages/Login/SingUp/SingUp";
import NotFound from "../../Pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement:<NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            }
        ]
    },
   
])

export default router;