import { useParams } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import { products } from '../../database/database'

// "https://gmedia.playstation.com/is/image/SIEPDC/Controller-XL@2x?fmt=png-alpha&scl=1"

export function ResumeCheckout(){


	const [product, setProduct] = useState<any>({})

	const params = useParams()
	let numberTeste = 0

	useEffect(()=>{
		if(params.id == null){
			// setUseImage('https://gmedia.playstation.com/is/image/SIEPDC/Controller-XL@2x?fmt=png-alpha&scl=1')
			numberTeste = 1
			localStorage.setItem('product', numberTeste.toString())
			setProduct(products[0])
		} else if(parseInt(params.id!) == 1){
			// setUseImage(teste)
			numberTeste = 2
			localStorage.setItem('product', numberTeste.toString())
			setProduct(products[1])
		} else {
			// setUseImage(teste2)
			numberTeste = 3
			localStorage.setItem('product', numberTeste.toString())
			setProduct(products[2])
		}


	},[])


    return(
        <div className="ContainerResume">
            <div className="ResumeCheckout">
                <h3>RESUMO</h3>
                <div className="ProductResume">
                    <div className="ContainerImageProduct">
                        <img src={product.img} alt="product" />
                    </div>
                    <div className="ContainerInfoProduct">
                        <p>{product.name}</p>
                        <h4>{product.variant}</h4>
                        <div className="ValueAndQuantity">
                            <p>Qtd.:1</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                </div>
                <div className="TotalResume">
                    <div className="TotalResume1">
                        <span>Produtos</span>
                        <p>{product.price}</p>
                    </div>
                    <div className="TotalResume1">
                        <span>Frete</span>
                        <p>Grátis</p>
                    </div>
                    <div className="TotalResume2">
                        <span>Total</span>
                        <h2>{product.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}