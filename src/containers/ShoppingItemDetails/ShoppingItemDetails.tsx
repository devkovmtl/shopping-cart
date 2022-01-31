import React from 'react';
import { useParams } from 'react-router-dom';
import { ItemCard } from '../../components';
import { useAppSelector } from '../../store/hooks';
import { selectSingleItemById } from '../ShoppingList/shoppingListSlice';

const ShoppingItemDetails = () => {
  let params = useParams();
  const item = useAppSelector((state) =>
    selectSingleItemById(state, +params.itemId!)
  );
  let content;

  if (item) {
    content = <ItemCard item={item} />;
  } else {
    content = <div>Sorry item not found</div>;
  }
  return <div>{content}</div>;
};

export default ShoppingItemDetails;
