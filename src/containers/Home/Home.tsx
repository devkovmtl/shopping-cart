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

const InfoContainer = styled.div``;

const SubTitle = styled.h3``;

const ImageContainer = styled.div`
  background: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 6px;

  @media (min-width: 500px) {
    width: 275px;
  }

  @media (min-width: 640px) {
    width: 480px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <InfoContainer>
        <SubTitle>Top online store of the year</SubTitle>
        <h1>Everything you need for your style</h1>
        <button onClick={(e) => navigate('/shops')}>Shop now</button>
      </InfoContainer>

      <ImageContainer>
        <Image src={ImageBackground} alt='Fashion' />
      </ImageContainer>
    </HomeContainer>
  );
};

export default Home;
