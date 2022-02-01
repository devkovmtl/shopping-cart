import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
function Cart() {
  const total = useAppSelector((state) => state.cartReducer.total);
  const itemsOrdered = useAppSelector(
    (state) => state.cartReducer.itemsOrdered
  );
  return (
    <div>
      <h1>Cart</h1>
      <p>$ {total}</p>
    </div>
  );
}

export default Cart;
