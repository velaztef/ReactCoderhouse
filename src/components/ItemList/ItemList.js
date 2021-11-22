import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { getFirestore } from '../../services/getFirebase';
import { useParams } from 'react-router';
import '../styles/ItemList.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection('Items').get()
    .then(resp => setProducts(resp.docs.map(it => ({id: it.id, ...it.data() }))))
  }, []);

  let {categorias} = useParams();

  
  const showItems = async () => {
    const db = getFirestore();
    if (categorias) {
      try {
        const res = await db.collection('Items').where('category', '==', categorias).get();
        setProducts(res.docs.map(item => ({id: item.id, ...item.data()})));
      } catch (error) {
        console.log(error);
      }  
    } else {
      try {
        const res = await db.collection('Items').orderBy('category', 'desc').get();
        setProducts(res.docs.map(item => ({id: item.id, ...item.data()})));
      } catch (error) {
        console.log(error);
      }  
    }
    setTimeout(2000)
  }

  useEffect(()=>{
    showItems();
    // eslint-disable-next-line
  }, [categorias]);

  return (
    <div className="product-list-container">
      {
       
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
               
                return (
                  <div key={product.id}>
                    <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      category={product.category}
                      id={product.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
};

export default ItemList;