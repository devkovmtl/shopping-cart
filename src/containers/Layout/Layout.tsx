import React from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { Home } from '..';
import { Header, Footer } from '../../components';

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin-top: 112px;
  flex: 1;
`;

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
    <MainContainer>
      <Header />
      <ContentContainer>{content}</ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
