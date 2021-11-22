import React, { useState } from 'react';
import '../styles/Cart.css';
import { useCartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';
import { getFirestore } from '../../services/getFirebase';
import Swal from 'sweetalert2';
import { CartX } from 'react-bootstrap-icons';
import { Button, Table } from 'react-bootstrap';
import CartForm from './CartForm'

const Cart = () => {

    const {cartList, clear, clearItem, totalPxQ} = useCartContext();
    //Variable para el mensaje condicional
    let cartMessage = true;
    if(cartList.length>0){
        cartMessage = false;
    }

    //Funciones para calcula totales de compra
    const pxq = (a,b) => {
        return a*b
      }

      const [dataForm, setDataForm] = useState({});

      const finishBuy = (dataform) => {
        let order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = {name: 'Stefania Velazquez', email:'velazquezstefania@gmail.com', phone: 1564202944, payment:'mercado pago'};
        order.total = totalPxQ();
        order.items = cartList.map(cartItem => {
          const id = cartItem.item.id;
          const item = cartItem.item.name;
          const price = pxq(cartItem.item.price, cartItem.cantidad);
          const quant = cartItem.cantidad;

          return {id, item, price, quant}
        })

        const dbOrder = getFirestore();

        const orderReady = dbOrder.collection('orders')
        orderReady.add(order)
        .then((IdDocumento)=>{
            Swal.fire({
            icon: 'info',
            title: `Su orden ${IdDocumento.id} fue procesada correctamente. Gracias por elegir TIENDA NOVA`,
            showConfirmButton: false,
            timer: 3000
          })
        })
        .catch(error => {
          console.log(error)
        })
        .finally(()=>{
         clear();
        })





        const updateItems = dbOrder.collection('Items').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id));

        const batch = dbOrder.batch();

    updateItems.get()
    .then(collection => {
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cartList.find(it => it.item.id === docSnapshot.id).cantidad
        })
      })
      batch.commit().then(resp => {
        console.log('modificado');
      })
      .catch(er => {
        console.log(er);
      })
    })
  }


    return(
        <section className="cart cartSlide"> 
             <div className="hero-container">
                 <h1 className="section_text">Prendas adquiridas</h1>
                 {
                cartMessage ?
                <div className="message">
                    <h2>No agregaste ningun producto al carrito</h2>
                    <Button variant="dark" className="button"><Link to={"/"} className='link'><span>Buscar productos</span></Link></Button>
                </div>
                :
                <div className="cartContiner">
                  <Table className="productCart">
                    <thead>
                      <tr>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartList.map((item => (
                        <tr key={item.item.id}>
                          <td>{item.cantidad}</td>
                          <td>{item.item.name}</td>
                          <td>{item.item.price}</td>
                          <td>{pxq(item.cantidad, item.item.price)}</td>
                          <td><Button variant="danger" onClick={() => clearItem(item.item.id)}> <CartX size={18} /> </Button></td>
                        </tr>
                        ))) }
                        <tr>
                          <td colSpan="3">TOTAL</td>
                          <td colSpan="2">$ {totalPxQ()}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="cartForm">
                        <CartForm finishBuy={finishBuy} clear={clear} setDataForm={setDataForm} dataForm={dataForm} className="cartForm"/>
                    </div>
                </div> 
                }
                
            </div>
        </section>
    )
}

export default Cart