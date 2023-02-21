import me from '../assets/category-me.png';
import products from '../assets/category-products.png';

import { ITExpense } from '../types/types';

export let expenses: Array<ITExpense> = [
   {
      id: 1,
      img: me,
      name: 'Новый телефон',
      price: 10000,
      category: 'me',
      date: '06/02/23',
   },
   {
      id: 2,
      img: products,
      name: 'Продукты в магазине',
      price: 1000,
      category: 'products',
      date: '07/02/23',
   },
   {
      id: 3,
      img: products,
      name: 'Сигареты',
      price: 193,
      category: 'products',
      date: '07/02/23',
   },
   {
      id: 4,
      img: products,
      name: 'Сигареты',
      price: 193,
      category: 'products',
      date: '07/01/23',
   },
];

export let categories: Array<string> = ['На себя любимого', 'Продукты', 'Семья', 'Развлечения', 'Одежда'];
