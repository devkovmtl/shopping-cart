import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h1>My Shopping App</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shops'>Shops</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
