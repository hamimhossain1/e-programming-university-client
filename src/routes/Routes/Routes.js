import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Checkout from "../../components/Checkout/Checkout";
import UserContext from "../../components/Contexts/UserContext/UserContext";
import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Courses from "../../components/Courses/Courses";
import Error from "../../components/Error/Error";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            // { path: '/', element: <Home></Home> },
            
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://e-programming-university-server.vercel.app/courses`),
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch(`https://e-programming-university-server.vercel.app/courses`),
            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://e-programming-university-server.vercel.app/courses`),
            },
            { path: '/faq', element: <FAQ></FAQ> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/register', element: <Register></Register> },
            { path: '/login', element: <Login></Login> },


            {
                path: '/detail/:category',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://e-programming-university-server.vercel.app/courses/${params.category}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`https://e-programming-university-server.vercel.app/id/${params.id}`)
            },
            
        ]
    },
    {path:'/*', element:<Error></Error>},
])