import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ButtonCard } from '../../components/ItemCard/ItemCard';
const CartContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 42px 0;
  & > h1 {
    text-align: center;
    margin-bottom: 24px;
    font-weight: bold;
  }
`;

const ItemsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start
  justify-content: space-evenly;
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #a9a9a9;
  border-radius: 12px;
  padding: 12px;
  margin: 12px 0;
  width: 320px;
  justify-content: space-between;
`;

const ImgCart = styled.img`
  width: 75px;
  height: auto;
`;

const InfoItemCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin-left: 12px;
  }
`;

const ButtonCardCart = styled.div`
  width: 25px;
  height: 25px;
  border: none;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

const Total = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

function Cart() {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.cartReducer.total);

  const itemsOrdered = useAppSelector(
    (state) => state.cartReducer.itemsOrdered
  );

  return (
    <CartContainer>
      <h1>Your Shopping cart</h1>
      <ItemsContainer>
        {itemsOrdered &&
          itemsOrdered.map((item) => (
            <CartItem key={item.id}>
              <ImgCart src={item.image} alt={`${item.title}`} />
              <InfoItemCart>
                <h3>{`${item.title.substring(0, 18)}...`}</h3>
                <p>$ {`${item.price}`}</p>
                <ButtonRow>
                  <ButtonCardCart>-</ButtonCardCart>
                  <span>0</span>
                  <ButtonCardCart>+</ButtonCardCart>
                </ButtonRow>
              </InfoItemCart>
            </CartItem>
          ))}
      </ItemsContainer>

      <div>
        <Total>Total: $ {total.toFixed(2)}</Total>
        <ButtonCard>Checkout</ButtonCard>
      </div>
    </CartContainer>
  );
}

export default Cart;
