import React from 'react';
import Button from 'react-bootstrap/Button'
import {NavLink} from 'react-router-dom'
import '../styles/Item.css'

const Item = ({ name, thumbnail, price, id, category}) => {

  return (
    <article className="product-card">
      <img className="product-card__image" src={thumbnail} alt="" />
      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">Precio: $ {price}</span> <br></br>
      <span className="product-card__name">Categoría: {category}</span>
      <Button variant='dark' className="button"><NavLink to={`/productos/${id}`} className='link'>Mas detalles</NavLink></Button>
    </article>
  );
};

export default Item;