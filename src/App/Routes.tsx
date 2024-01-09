import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";
import NotFoundPg from "../Components/NotFoundPg";

export const routes = createBrowserRouter([
     {
         path: "*",
       element: <NotFoundPg />,
    } ,
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/posts",
        element: <Home />
    }
])