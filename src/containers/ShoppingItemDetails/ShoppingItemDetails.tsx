import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemCard } from '../../components';

const ShoppingItemDetails = () => {
  let params = useParams();
  return (
    <div>
      <p>Item : {params.itemId}</p>
      <ItemCard />
    </div>
  );
};

export default ShoppingItemDetails;
