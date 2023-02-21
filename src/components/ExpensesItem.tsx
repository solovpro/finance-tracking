import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ITExpense } from '../types/types';

interface ExpenseProps {
   expense: ITExpense;
}

const ExpensesItem: React.FC<ExpenseProps> = ({ expense }) => {
   return (
      <View style={styles.container}>
         <View style={styles.image}>
            <Image style={{ width: '100%', height: '100%' }} source={expense.img} />
         </View>
         <View style={styles.info}>
            <Text style={styles.infoName}>{expense.name}</Text>
            <Text style={styles.infoDate}>{expense.date}</Text>
            <Text style={styles.infoPrice}>{expense.price} &#8381;</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingLeft: 50,
      flexDirection: 'row',
      marginBottom: 20,
      paddingBottom: 20,
      borderBottomColor: '#AAA',
      borderBottomWidth: 1,
   },
   image: {
      width: 50,
      height: 50,
      marginTop: 10,
   },
   info: {
      marginLeft: 15,
   },
   infoName: {
      fontSize: 20,
   },
   infoPrice: {},
   infoDate: {},
});

export default ExpensesItem;
