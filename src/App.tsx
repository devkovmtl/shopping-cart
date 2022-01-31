import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, ShoppingList, Cart, ShoppingItemDetails } from './containers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='shops' element={<ShoppingList />} />
        <Route path='shops/:itemId' element={<ShoppingItemDetails />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
