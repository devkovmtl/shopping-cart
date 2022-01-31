import React from 'react';
import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu, HiOutlineShoppingCart } from 'react-icons/hi';
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
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #a9a9a9;
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

const Header = () => {
  const navigate = useNavigate();
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
      <MenuButton>
        <HiMenu size={'24'} />
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;
