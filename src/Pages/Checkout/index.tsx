import { Banner } from "../../Components/Banner";
import { Footer } from "../../Components/Footer";
import { FormAddress } from "../../Components/FormData";
import './style.css'


export function Checkout() {

	return (
		<div className="CheckoutContainer">
			<Banner/>
			<FormAddress />
			<Footer/>
		</div>


	)
}