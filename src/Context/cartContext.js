import {useState, createContext, useContext } from "react";

 const CartContext = createContext ([]);

 export const useCartContext = () => useContext (CartContext);

function CartContextProvider ({children}){

    const [cartList, setCartList ] = useState ([]);

    const addItem = (item) =>{
        setCartList([...cartList, item]);
    }

    const [qBuy, setqBuy] = useState(0);

    const addCart = (contador) => {
        setqBuy (qBuy+contador)
      }

    function clear() {
        setCartList([]);
        setqBuy(0)
    }

    const clearItem = (id) => {
        let item = cartList.find(item => item.item.id === id);
        let index = cartList.indexOf(item);
        cartList.splice(index,1);
        setqBuy (qBuy-item.cantidad)
        setCartList([...cartList])
      }

      const totalPxQ = () => {
        return cartList.reduce((total, item)=> (total + item.cantidad*item.item.price), 0)
      }

    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            addCart,
            clear, 
            clearItem,
            qBuy, 
            totalPxQ
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider