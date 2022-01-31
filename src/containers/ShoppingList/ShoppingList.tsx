import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchShoppingItems,
  selectAllShoppingItems,
} from './shoppingListSlice';
import { ItemCard } from '../../components';

const ShoppingList = () => {
  const navigate = useNavigate();
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
    content = items.map((item) => (
      <div key={item.id} onClick={(e) => navigate(`/shops/${item.id}`)}>
        <p>{item.description}</p>
      </div>
    ));
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
