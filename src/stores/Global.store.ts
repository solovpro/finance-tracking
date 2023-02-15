import React, { createContext } from 'react';
import { types, Instance } from 'mobx-state-tree';

const expensesModel = types.model('expensesModel', {
   name: types.string,
   price: types.number,
   category: types.string,
   date: types.string,
});

export const globalStore = types
   .model('globalStore', {
      // addExpensePage: types.optional(types.boolean, false),
      categories: types.optional(types.array(types.string), [
         'На себя любимого',
         'Продукты',
         'Семья',
         'Развлечения',
         'Одежда',
      ]),
      expenses: types.optional(types.array(expensesModel), [
         {
            name: 'Новый телефон',
            price: 10000,
            category: 'me',
            date: '06/02/23',
         },
         {
            name: 'Продукты в магазине',
            price: 1000,
            category: 'products',
            date: '07/02/23',
         },
         {
            name: 'Сигареты',
            price: 193,
            category: 'products',
            date: '07/02/23',
         },
         {
            name: 'Сигареты',
            price: 193,
            category: 'products',
            date: '07/02/23',
         },
      ]),
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
   }))
   .actions(self => ({
      // setAddExpensePage(newValue: boolean) {
      //    self.addExpensePage = newValue;
      // },
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
