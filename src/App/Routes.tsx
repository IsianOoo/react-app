import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";

export const routs = createBrowserRouter([
    path: "*",
    element: <NotFound />
])