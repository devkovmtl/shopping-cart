import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from '../containers/ShoppingList/shoppingListSlice';

export const store = configureStore({
  reducer: {
    shoppingReducer: shoppingListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
