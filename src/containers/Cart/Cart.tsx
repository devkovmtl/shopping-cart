import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { add, remove, totalAmount } from './cartSlice';
import { ButtonCard } from '../../components/ItemCard/ItemCard';
import { Iitem } from '../../interface';

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
  const total = useAppSelector(totalAmount);

  const itemsOrdered = useAppSelector(
    (state) => state.cartReducer.itemsOrdered
  );

  const removeAnItem = (item: Iitem) => dispatch(remove(item));
  const addAnItem = (item: Iitem) => dispatch(add(item));

  return (
    <CartContainer>
      <h1>Your Shopping cart</h1>
      <ItemsContainer>
        {itemsOrdered.length > 0 ? (
          itemsOrdered.map((element) => (
            <CartItem key={element.item.id}>
              <ImgCart src={element.item.image} alt={`${element.item.title}`} />
              <InfoItemCart>
                <h3>{`${element.item.title.substring(0, 18)}...`}</h3>
                <p>$ {`${element.item.price * element.quantity}`}</p>
                <ButtonRow>
                  <ButtonCardCart onClick={() => removeAnItem(element.item)}>
                    -
                  </ButtonCardCart>
                  <span>{element.quantity}</span>
                  <ButtonCardCart onClick={() => addAnItem(element.item)}>
                    +
                  </ButtonCardCart>
                </ButtonRow>
              </InfoItemCart>
            </CartItem>
          ))
        ) : (
          <div></div>
        )}
      </ItemsContainer>

      <div>
        <Total>Total: $ {total.toFixed(2)}</Total>
        <ButtonCard>Checkout</ButtonCard>
      </div>
    </CartContainer>
  );
}

export default Cart;
