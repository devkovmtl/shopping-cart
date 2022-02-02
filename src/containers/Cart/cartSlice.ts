import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iitem } from '../../interface';
import { RootState } from '../../store';
import { IinitialCartState } from '../../interface';

const initialState: IinitialCartState = {
  totalNbrArticles: 0,
  totalAmount: 0,
  itemsOrdered: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Iitem>) => {
      const itemIsAlreadyInCart = state.itemsOrdered.find(
        (item) => item.item.id === action.payload.id
      );

      if (!itemIsAlreadyInCart) {
        state.itemsOrdered = state.itemsOrdered.concat({
          item: action.payload,
          quantity: 1,
        });
      }
      if (itemIsAlreadyInCart) {
        state.itemsOrdered = [
          ...state.itemsOrdered.map((item) => {
            if (item.item.id === action.payload.id) {
              return {
                item: item.item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        ];
      }
      state.totalNbrArticles += 1;
      state.totalAmount += action.payload.price;
    },
    remove: (state, action: PayloadAction<Iitem>) => {
      const { item, quantity } = state.itemsOrdered.filter(
        (el) => el.item.id === action.payload.id
      )[0];
      if (quantity <= 1) {
        state.itemsOrdered = state.itemsOrdered.filter(
          (el) => el.item.id !== action.payload.id
        );
      }
      if (quantity > 1) {
        state.itemsOrdered = [
          ...state.itemsOrdered.map((element) => {
            if (element.item.id === action.payload.id) {
              return {
                item: element.item,
                quantity: (element.quantity -= 1),
              };
            } else {
              return element;
            }
          }),
        ];
      }

      state.totalNbrArticles -= 1;
      state.totalAmount -= item.price;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const totalAmount = (state: RootState) => state.cartReducer.totalAmount;
export const totalNbrArticles = (state: RootState) =>
  state.cartReducer.totalNbrArticles;

export const itemsOrdered = (state: RootState) =>
  state.cartReducer.itemsOrdered;

export const nbrItemsOrdered = (state: RootState) =>
  state.cartReducer.itemsOrdered.length;

export default cartSlice.reducer;
