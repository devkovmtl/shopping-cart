import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchShoppingItems,
  selectAllShoppingItems,
} from './shoppingListSlice';
import { ItemCard } from '../../components';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const GridContainer = styled.div`
  margin-top: 42px;
  padding-bottom: 42px;
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 375px));
  gap: 20px;

  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(min-content, 200px));
    justify-content: center;
    row-gap: 50px;
    padding: 20px;
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    justify-content: center;
    row-gap: 50px;
    padding: 20px;
  }
`;

const ShoppingList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectAllShoppingItems);
  const itemsStatus = useAppSelector((state) => state.shoppingReducer.status);
  const error = useAppSelector((state) => state.shoppingReducer.error);
  useEffect(() => {
    if (itemsStatus === 'idle') {
      dispatch(fetchShoppingItems());
    }
  }, [itemsStatus, dispatch]);

  let content;

  if (itemsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (itemsStatus === 'succeeded') {
    content = (
      <GridContainer>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={() => navigate(`/shops/${item.id}`)}
          />
        ))}
      </GridContainer>
    );
  } else if (itemsStatus === 'failed') {
    content = <div>Sorry Error</div>;
  } else {
    content = <div></div>;
  }

  return <Container>{content}</Container>;
};

export default ShoppingList;
