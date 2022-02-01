import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iitem } from '../../interface';
import { RootState } from '../../store';
import { IinitialCartState } from '../../interface';

const initialState: IinitialCartState = {
  total: 0,
  itemsOrdered: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Iitem>) => {
      state.total += action.payload.price;
      const exist = state.itemsOrdered.find(
        (item) => item.id === action.payload.id
      );

      state.itemsOrdered = state.itemsOrdered.concat(action.payload);
    },
    remove: (state, action: PayloadAction<Iitem>) => {
      state.total -= action.payload.price;
      state.itemsOrdered = state.itemsOrdered.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const total = (state: RootState) => state.cartReducer.total;

export const itemsOrdered = (state: RootState) =>
  state.cartReducer.itemsOrdered;

export const nbrItemsOrdered = (state: RootState) =>
  state.cartReducer.itemsOrdered.length;

export default cartSlice.reducer;
