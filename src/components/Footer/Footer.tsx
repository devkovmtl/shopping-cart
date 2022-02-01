import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const FooterContainer = styled.div`
  background: black;
  padding: 12px 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 99px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 500px) {
    padding: 18px 42px;
  }
`;

const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled.div`
  padding: 8px 12px;
  color: #a9a9a9;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const CopyRightContainer = styled.small`
  color: white;
  margin-top: 12px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinkContainer>
        <SocialLink>
          <AiOutlineInstagram size={'24'} />
        </SocialLink>
        <SocialLink>
          <AiFillFacebook size={'24'} />
        </SocialLink>
      </SocialLinkContainer>

      <CopyRightContainer>
        copyright &copy; 2022 MyShop. All Rights Reserved
      </CopyRightContainer>
    </FooterContainer>
  );
};

export default Footer;
