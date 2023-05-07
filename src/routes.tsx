import {Routes, Route} from 'react-router-dom'
import { Checkout } from './Pages/Checkout'
import { PixGenerator } from './Components/Pix'

export const Router = ()=>{
	return(
		<Routes>
			<Route path='/' element={<Checkout/>}/>
			<Route path='/:id' element={<Checkout/>}/>
			<Route path='/payment' element={<PixGenerator/>}/>
		</Routes>
	)
}