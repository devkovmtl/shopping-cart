import React from 'react';
import { Header } from './components';
import { Home, ShoppingList } from './containers';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <ShoppingList />
    </div>
  );
}

export default App;
