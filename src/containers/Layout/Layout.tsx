import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Home } from '..';
import { Header } from '../../components';

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);

  let content;

  if (location.pathname === '/') {
    content = <Home />;
  } else {
    content = <Outlet />;
  }

  return (
    <div>
      <Header />
      <div>{content}</div>
    </div>
  );
};

export default Layout;
