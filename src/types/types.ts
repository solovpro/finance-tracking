export interface ITExpense {
   id: number;
   img: number;
   name: string;
   price: number;
   category: string;
   date: string;
}

export interface NewExpense {
   name: string;
   price: string;
   date: string;
   category: string;
}
