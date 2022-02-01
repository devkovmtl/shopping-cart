import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const CartContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-item: center;
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
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgCart = styled.img`
  width: 75px;
  height: auto;
`;

const Total = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weightL bold;
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
              <div>
                <h3>{`${item.title.substring(0, 18)}...`}</h3>
                <p>$ {`${item.price}`}</p>
              </div>
            </CartItem>
          ))}
      </ItemsContainer>

      <Total>Total: $ {total.toFixed(2)}</Total>
    </CartContainer>
  );
}

export default Cart;
