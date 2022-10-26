import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import Error from "../../components/Error/Error";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Register/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children:[
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/courses', element: <Courses></Courses>},
            {path: '/faq', element: <FAQ></FAQ>},
            {path: '/blog', element: <Blog></Blog>},
            {path: '/register', element: <Register></Register>},
            {path: '/login', element: <Login></Login>},
        ]
    }
])