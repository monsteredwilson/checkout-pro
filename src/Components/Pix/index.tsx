import { useEffect, useState } from "react";
import { Contador } from "../Countdown";
import './style.css'
import mercadopago from '../../assets/mercado-pago.png'
import qrcode from '../../assets/qrcode-pix.png'
import howtopay from '../../assets/how-to-pay.png'
import { toast } from "react-toastify";


export function PixGenerator() {

    const [timePayment, setTimePayment] = useState('')
    const [contador, setContador] = useState(5 * 60)

    useEffect(() => {
        if (contador == 0) {
            setTimePayment('Pagamento realizado com sucesso!')
        }
        setTimeout(() => {
            setContador(contador - 1)
        }, 1000)
    }, [contador])

    const texto: string = `00020126360014BR.GOV.BCB.PIX0114+5562993716245520400005303986540589.005802BR5912Adryel Cesar6007Goiania62160512PAGAMENTO2076304508D`

    function CopiarBotao(texto: string) {
        navigator.clipboard.writeText(texto);
        toast.success('Pix copiado com sucesso',{position:"bottom-right"})
    }

    return (
        <div className="PixContainer">
            <div className="LogoMP">
                <img src={mercadopago} alt="Mercado Pago" />
            </div>
            <div className="BoxTitlePix">
                <h2>PIX gerado com sucesso</h2>
                <p>Estamos aguardando o pagamento!</p>
                <p>Tempo para conclusão da operação</p>
                <Contador />
                <span className="PaymentConfirmed">{timePayment}</span>
            </div>
            <div className="MessageToCopyAndPaste">
                <p>Pague através do código <span>PIX copia e cola</span>.</p>
                <div className="PixCopyAndPaste">
                    <span>
                        00020126360014BR.GOV.BCB.
                        PIX0114+
                        55629937162
                        45520400005303986540589.
                        005802BR5912Adryel Cesar6007Goiania
                        62160512PAGAMENTO2076304508D
                    </span>
                    <button className="ButtonCopyPix" onClick={() => CopiarBotao(texto)}>Copiar PIX</button>
                </div>
                <p>ou pague pelo <span>PIX QRCODE</span>:</p>
                <h3>PEDIDO #352 - RESERVADO </h3>
            </div>
            <div>
                <img src={qrcode} alt="qrcode" className="QRCodePix" />
            </div>
            <div>
                <img src={howtopay} alt="how to pay" className="HowToPay" />
            </div>
        </div>
    )
}