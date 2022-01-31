export interface Iitems {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IinitialShoppingList {
  items: Iitems[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
