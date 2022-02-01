import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageBackground from '../../assets/images/pexels-terje-sollie-298863.jpg';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: auto;
`;

const InfoContainer = styled.div`
  height: 100%;
  margin-left: 24px;
  padding-top: 48px;
  & > * {
    margin: 24px 0;
  }
`;

const Title = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 58px;
  padding-right: 24px;
`;

const ImageContainer = styled.div`
  background: white;
  border-radius: 50px;
  align-items: center;
  justify-items: center;
  padding: 6px;
  margin-left: 64px;
  display: none;

  @media (min-width: 640px) {
    width: 480px;
    display: flex;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50px;
`;

const HomeButton = styled.button`
  background: black;
  color: white;
  border-radius: 24px;
  padding: 16px 48px;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <InfoContainer>
        <Title>
          Everything you need <br /> for your style
        </Title>
        <HomeButton onClick={(e) => navigate('/shops')}>Shop now</HomeButton>
      </InfoContainer>

      <ImageContainer>
        <Image src={ImageBackground} alt='Fashion' />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;
