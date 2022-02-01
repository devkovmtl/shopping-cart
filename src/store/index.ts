import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from '../containers/ShoppingList/shoppingListSlice';
import cartReducer from '../containers/Cart/cartSlice';
export const store = configureStore({
  reducer: {
    shoppingReducer: shoppingListReducer,
    cartReducer: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
