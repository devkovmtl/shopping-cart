import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const HeaderContainer = styled.div`
  background: black;
  color: white;
  height: 94px;
  padding: 18px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  a {
    color: white;
  }
`;

const HeaderTitle = styled.h1`
  font-family: 'Dancing Script', cursive;
`;

const Nav = styled.ul`
  display: none;

  &:last-child:hover {
    border-bottom: 2px solid transparent;
  }

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
  } ;
`;

const NavLink = styled.li`
  margin: 0px 8px;
  padding: 8px 12px;
  border-radius: 10px;

  &:hover {
    background: #a9a9a9;
  }

  &:hover > a {
    color: black;
  }
`;

const MenuButton = styled.div`
  border: 2px solid #a9a9a9;
  border-radius: 12px;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: #a9a9a9;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const MenuButtonCart = styled(MenuButton)`
  display: none;
  height: 35px;
  width: 35px;
  border-radius: 50%;

  &:hover {
    color: black;
  }

  @media (min-width: 500px) {
    display: flex;
  }
`;

const MobileNav = styled.ul`
  background: rgb(0 0 0 / 75%);
  position: absolute;
  top: 94px;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobileNavLink = styled.li`
  padding: 18px 12px;
  border-radius: 12px;
  width: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-bottom: 12px;

  & > a {
    font-size: 18px;
  }

  &:hover {
    background: #a9a9a9;
    cursor: pointer;
  }

  &:hover > a {
    color: black;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMobilLinkClick = (e: React.MouseEvent, path: string) => {
    if (isOpen) {
      setIsOpen(false);
    }
    navigate(path);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>MyShop</HeaderTitle>

      <Nav>
        <NavLink>
          <Link to='/'>Home</Link>
        </NavLink>
        <NavLink>
          <Link to='/shops'>Shops</Link>
        </NavLink>
        <MenuButtonCart onClick={(e) => navigate(`/cart`)}>
          <HiOutlineShoppingCart size={'24'} />
        </MenuButtonCart>
      </Nav>
      <MenuButton onClick={(e) => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose size={'24'} /> : <HiMenu size={'24'} />}
      </MenuButton>

      {isOpen ? (
        <MobileNav>
          <MobileNavLink onClick={(e) => handleMobilLinkClick(e, '/')}>
            Home
          </MobileNavLink>
          <MobileNavLink onClick={(e) => handleMobilLinkClick(e, '/shops')}>
            Shops
          </MobileNavLink>
          <MobileNavLink onClick={(e) => handleMobilLinkClick(e, '/cart')}>
            Cart
          </MobileNavLink>
        </MobileNav>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
