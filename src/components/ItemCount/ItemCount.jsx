import { useState } from "react"
import '../styles/ItemCounts.css'
import Button from 'react-bootstrap/Button';

export default function Contador ({stock, onAdd}) {
    const [contador, setContador] = useState(0)

    const sumar = () => { 
        if(contador < stock)
        setContador(contador +1);
        
    }
    const restar = () => {
        if (contador > 0){
            setContador (contador -1)
        }
       
    }
    return(
        <div>
            <div className="container">
                <div className="contador_container">
               
              <button
               className="contador_container_boton"
               onClick ={sumar}>
               +
              </button>
              <span className="count-container__qty">{contador}</span>
              <button 
              className="contador_container_boton"
              onClick = {restar}> 
              - 
              </button>
              </div>
         
             </div>

             <div className="boton_cart">
             <Button variant='dark' className="button"
             onClick ={() => onAdd (contador) }
             disabled={stock === 0 ? true : null}
              > 
             Agregar al carrito
             </Button>
             </div>
             
        </div>

        
    )
}


