import InputMask from 'react-input-mask'
import './style.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { ResumeCheckout } from '../ResumeCheckout'
import {FiLock} from 'react-icons/fi'


export function FormAddress() {
	const navigate = useNavigate()

	const [estado, setEstado] = useState('')
	const [endereco, setEndereco] = useState('')
	const [bairro, setBairro] = useState('')


	const checkCEP = (e: any) => {
		const cep = e.target.value
		console.log(cep)

		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then(res => res.json())
			.then(data => {
				setEndereco(data.logradouro)
				setBairro(data.bairro)
				setEstado(`${data.localidade}-${data.uf}`)
			})


	}


	return (
		<div className='BoxData'>
			<div className='BoxTitle'>
				<div className='BoxSubtitle'>
					<h2>Endereço para Entrega</h2>
				</div>
			</div>
			<form className="FormData" onSubmit={() => navigate('/payment')}>
				<div className='DivInput'>
					<label htmlFor='name'>Nome completo</label>
					<input type="text" id='name' placeholder='Digite seu nome' required />
				</div>
				<div className='DivInput'>
					<label htmlFor='email'>E-mail</label>
					<input type="email" id='email' placeholder='Digite seu e-mail' required />
				</div>
				<div className='DivInput'>
					<label htmlFor="whatsapp" title='whatsapp'>Whatsapp</label>
					<InputMask mask='(99) 99999-9999' className='MaskPhone' required placeholder='(00) 00000-000' />
				</div>
				<div className='ContainerCEP'>
					<div className='DivCEP'>
						<label htmlFor="CEP" title='CEP'>CEP</label>
						<InputMask mask='99999-999' className='MaskCEP' required onBlur={checkCEP} />
					</div>
					<p>{estado}</p>
				</div>
				<div className='DivInput'>
					<label htmlFor="endereco">Endereço</label>
					<input type="text" id='endereco' value={endereco} />
				</div>
				<div className='Address'>
					<div className='NumberAddress'>
						<label htmlFor="numero">Número</label>
						<input type="number" id='numero' required />
					</div>
					<div className='Neighbor'>
						<label htmlFor="bairro">Bairro</label>
						<input type="text" id='bairro' value={bairro} required />
					</div>
				</div>
				<div className='DivInput'>
					<label htmlFor="complemento" title='complemento'>Complemento <span>(opcional)</span></label>
					<input type="complemento" name='complemento' id='complemento' />
				</div>

				<label htmlFor="entrega">Forma de entrega:</label>
				<section className='SectionFrete'>
					<div>
						<h3>CORREIOS - Prazo de 2 a 4 semanas</h3>
						<p>Entrega garantida</p>
					</div>
					<p>Grátis</p>
				</section>
				<ResumeCheckout />

				<button className='ContinueButton'><FiLock/> Comprar Agora</button>
			</form>
		</div>

	)
}