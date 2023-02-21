import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useStore } from '../stores/Global.store';

import ExpensesItem from '../components/ExpensesItem';

const Expenses: React.FC = () => {
   const store = useStore();
   return (
      <View style={styles.container}>
         <FlatList data={store.expenses} renderItem={({ item }) => <ExpensesItem expense={item} />} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: 30,
   },
});

export default Expenses;
