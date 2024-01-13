import { createBrowserRouter } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'
import NotFoundPg from '../Components/NotFoundPg'
import Albums from '../Components/AlbumPage'
import Todos from "../Components/TodosPage";

export const routes = createBrowserRouter([
	{
		path: '*',
		element: <NotFoundPg />,
	},
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/posts',
		element: <Home />,
	},
	{
		path: '/albums',
		element: <Albums />,
	},
	{
        path: "/todos",
        element: <Todos />
    }
])
