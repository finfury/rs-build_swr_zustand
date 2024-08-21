import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App.tsx'
import {BrowserRouter} from 'react-router-dom'

const rootEl = document.getElementById('root')

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl)

	root.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	)
}
