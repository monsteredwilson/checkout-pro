import { ToastContainer } from 'react-toastify'
import './App.css'
import { Router } from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react'

function App() {


	return (
		<>
			<Router/>
			<ToastContainer/>
			<Analytics/>
		</>
	)
}

export default App
