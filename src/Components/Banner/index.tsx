import banner from '../../assets/banner.png'
import './style.css'

export function Banner (){
	return(
		<div className='BannerContainer'>
			<div>
				<img src={banner} alt="Entrega garantida" className='BannerImg'/>
			</div>
			<div className='BannerSubtitle'>
				<p>Comprou? Não gostou? Receba seu dinheiro de volta sem burocracia.</p>
			</div>
		</div>
	)
}