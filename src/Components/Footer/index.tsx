import footer from '../../assets/footer.png'
import './style.css'

export function Footer(){

	return(
		<div className='FooterContainer'>
			<img src={footer} alt="Footer Banner" className='FooterImg'/>
		</div>
	)
}