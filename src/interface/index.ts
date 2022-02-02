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

export interface Quantity {
  id: number;
  quantity: number;
}

export interface IitemsOrdered {
  quantity: number;
  item: Iitem;
}

export interface IinitialCartState {
  itemsOrdered: IitemsOrdered[];
  totalNbrArticles: 0;
  totalAmount: 0;
}
