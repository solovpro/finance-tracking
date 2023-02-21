import React, { createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';

import { categories, expenses } from '../data/data';
import { NewExpense, ITExpense } from '../types/types';

import me from '../assets/category-me.png';

const expensesModel = types.model('expensesModel', {
   id: types.number,
   img: types.number,
   name: types.string,
   price: types.number,
   category: types.string,
   date: types.string,
});

export const globalStore = types
   .model('globalStore', {
      categories: types.optional(types.array(types.string), categories),
      expenses: types.optional(types.array(expensesModel), expenses),
   })
   .views(self => ({
      get namesComputed() {
         let names: String[] = [];
         self.expenses.forEach((currentValue, index, array) => {
            if (!array.includes(currentValue)) {
               names.push(currentValue.name);
            }
         });
         return names;
      },
      get allExpensesComputed() {
         let count = 0;
         for (let i = 0; i < self.expenses.length; i++) {
            count += self.expenses[i].price;
         }
         return count;
      },
   }))
   .actions(self => ({
      createNewExpense(values: NewExpense) {
         const newExpense: ITExpense = {
            id: self.expenses.length + 1,
            img: me,
            name: values.name,
            price: Number(values.price),
            date: values.date,
            category: values.category,
         };
         // Не сразу обновляет self.expenses поэтому в Expenses screen
         // после добавления не отображается новый расход
         self.expenses.push(newExpense);
      },
   }));

export const RootStoreContext = createContext<null | Instance<typeof globalStore>>(null);
export const StoreProvider = RootStoreContext.Provider;

export function useStore() {
   const store = React.useContext(RootStoreContext);
   if (store === null) {
      throw new Error('main store cannot be null, please add a context provider');
   }
   return store;
}
