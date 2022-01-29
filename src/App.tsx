import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, ShoppingList, Cart } from './containers';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shops' element={<ShoppingList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
