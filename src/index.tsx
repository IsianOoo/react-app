import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './App/Store'
import { routes } from "./App/Routes";
import { fetchUsers } from './features/UsersSlice'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
)
