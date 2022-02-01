export interface Iitem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface IinitialShoppingList {
  items: Iitem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface IinitialCartState {
  itemsOrdered: Iitem[];
  total: 0;
}
