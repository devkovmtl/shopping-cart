import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IinitialShoppingList } from '../../interface';
import { RootState } from '../../store';

const initialState: IinitialShoppingList = {
  status: 'idle',
  items: [],
  error: null,
};

export const fetchShoppingItems = createAsyncThunk(
  'shopping/fetchShoppingItems',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

export const shoppingListSlice = createSlice({
  name: 'shoppings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShoppingItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchShoppingItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as string | null;
      });
  },
});

export default shoppingListSlice.reducer;

export const selectAllShoppingItems = (state: RootState) =>
  state.shoppingReducer.items;

export const selectSingleItemById = (state: RootState, itemId: number) =>
  state.shoppingReducer.items.find((item) => item.id === itemId);
