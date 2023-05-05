import { useEffect, useState } from "react"
import './style.css'

export function Contador() {

    const [totalTimeInSeconds, setTotalTimeinSeconds] = useState(30 * 60)

    const minutes = Math.floor(totalTimeInSeconds / 60)
    const seconds = totalTimeInSeconds % 60

    useEffect(() => {
        if(totalTimeInSeconds == 0){
            alert('A validade do QRCode abacou, recarregue a página')
            return
        }
        setTimeout(()=>{
            setTotalTimeinSeconds(totalTimeInSeconds - 1)
        },1000)
    }, [totalTimeInSeconds])

    return (
        <div className="Contador">
            <span>{minutes.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span>{seconds.toString().padStart(2, '0')}</span>
        </div>
    )
}