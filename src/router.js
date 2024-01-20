import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SingleMovie from "./Pages/SingleMovie";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Genres from "./Pages/Genres";



const routes= createBrowserRouter([
{
    path: "/",
    element: <HomePage/>,
},
{
    path: "/item/:id",
    element: <SingleMovie/>,
},
{
    path: "/movies",
    element: <Movies/>,
},

{
    path: "*",
    element: <NotFound/>,
},
{
    path: "/search",
    element: <Search/>,
},
{
    path: "/about",
    element: <AboutUs/>,
},
{
    path: "/contact",
    element: <ContactUs/>,
},
{
    path: "/genres",
    element: <Genres/>,
},
]);
export default function Router(){
   return <RouterProvider router={routes}/>;
   
}