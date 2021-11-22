import React from 'react';
import { useParams } from 'react-router-dom';

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Productos = () => {
  let { id } = useParams();

  return (
    <main>
      <ItemDetailContainer id={id} />
    </main>
  );
};

export default Productos;