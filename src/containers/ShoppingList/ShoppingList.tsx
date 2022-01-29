import React from 'react';
import { Outlet } from 'react-router-dom';
import { ItemCard } from '../../components';
const ShoppingList = () => {
  return (
    <div>
      <h1>Shopping List</h1>
      <ItemCard />
      <ItemCard />
      <ItemCard />

      {/* TODO: Implement conditional rendering */}
      <Outlet />
    </div>
  );
};

export default ShoppingList;
