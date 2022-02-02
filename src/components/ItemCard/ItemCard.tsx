import React from 'react';
import styled from 'styled-components';
import { add } from '../../containers/Cart/cartSlice';
import { Iitem } from '../../interface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: left;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const ImgCard = styled.img`
  height: 100%;
`;

const CardImgContainer = styled.div`
  height: 18rem;
  padding: 2rem;
  margin: 0px auto;
`;

const CardBottomContainer = styled.div`
  padding: 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    font-size: 1.2rem;
    padding: 1.2rem 0;
  }
`;

export const ButtonCard = styled.button`
  padding: 1.2rem 1.8rem;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

interface ItemCardProps {
  item: Iitem;
  onClick?: () => void;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const dispatch = useAppDispatch();
  const handleAddToCard = (e: React.MouseEvent) => {
    dispatch(add(item));
  };

  return (
    <Card id={`${item.id}`}>
      <CardImgContainer>
        <ImgCard src={`${item.image}`} alt={`${item.title}`} />
      </CardImgContainer>
      <CardBottomContainer>
        <div>
          <p>$ {item.price}</p>
          <h1>{item.title}</h1>
        </div>

        <ButtonCard onClick={handleAddToCard}>Add to Card</ButtonCard>
      </CardBottomContainer>
    </Card>
  );
};

export default ItemCard;
