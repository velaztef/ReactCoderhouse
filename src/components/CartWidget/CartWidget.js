import React from 'react'
import { IoCartSharp } from 'react-icons/io5';
import { useCartContext } from '../../Context/cartContext';


const CartWidget = () => {
    
    const {qBuy} = useCartContext();

    return (
            <div>
                <IoCartSharp/>
                <div className="qty-display">{qBuy}</div>
            </div>
    )
}

export default CartWidget

