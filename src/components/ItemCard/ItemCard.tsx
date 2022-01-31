import React from 'react';
import { Iitem } from '../../interface';

interface ItemCardProps {
  item: Iitem;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div id={`${item.id}`}>
      <h1>{item.title}</h1>
      <img src={`${item.image}`} alt={`${item.title}`} />
      <p>{item.price}</p>
    </div>
  );
};

export default ItemCard;
