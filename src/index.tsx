import React from 'react'
import ReactDOM from 'react-dom/client'
/*   router   */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@fontsource/poppins'
import './index.css'

// pages
import Home from './pages/Home'
import NotFound from './pages/404'

//layout
import Root from './root'

import reportWebVitals from './reportWebVitals'
import LegalTerms from './pages/Legal'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'legal',
				element: <LegalTerms />,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
