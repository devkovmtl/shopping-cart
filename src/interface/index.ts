export interface Iitem {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IinitialShoppingList {
  items: Iitem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
