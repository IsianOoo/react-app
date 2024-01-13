import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './App/Store'
import { routes } from './App/Routes'
import { fetchUsers } from './features/UsersSlice'
import { fetchPosts } from './features/postSlice'
import { fetchAlbums } from './features/albumSlice'
import { fetchPhotos } from './features/PhotosSlice'
import { fetchComments } from "./features/CommentsSlice";
import { fetchTodos } from "./features/TodosSlice";

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())
store.dispatch(fetchAlbums())
store.dispatch(fetchPhotos())
store.dispatch(fetchComments());
store.dispatch(fetchTodos());


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
)
