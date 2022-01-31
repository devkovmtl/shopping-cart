import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchShoppingItems,
  selectAllShoppingItems,
} from './shoppingListSlice';
import { ItemCard } from '../../components';

const ShoppingList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectAllShoppingItems);
  const itemsStatus = useAppSelector((state) => state.shoppingReducer.status);
  const error = useAppSelector((state) => state.shoppingReducer.error);
  useEffect(() => {
    if (itemsStatus === 'idle') {
      dispatch(fetchShoppingItems());
    }
  }, [itemsStatus, dispatch]);

  let content;

  if (itemsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (itemsStatus === 'succeeded') {
    content = items.map((item) => <p key={item.id}>{item.description}</p>);
  } else if (itemsStatus === 'failed') {
    content = <div>Sorry Error</div>;
  } else {
    content = <div></div>;
  }

  return (
    <div>
      <h1>Our Shops</h1>
      {content}
    </div>
  );
};

export default ShoppingList;
