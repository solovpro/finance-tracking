import React, { useEffect } from 'react';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigationType } from '../hooks/hooks';
import { useStore } from '../stores/Global.store';

const Main: React.FC = () => {
   const store = useStore();
   const navigate = useNavigationType();
   return (
      <View style={styles.container}>
         <Pressable style={styles.button} onPress={() => navigate.navigate('Expenses')}>
            <Text style={styles.buttonText}>Мои расходы</Text>
         </Pressable>
         <Pressable style={styles.button} onPress={() => navigate.navigate('AddExpense')}>
            <Text style={styles.buttonText}>Добавить расход</Text>
         </Pressable>
         <View style={styles.info}>
            <Text style={styles.infoHeader}>Записей о расходах</Text>
            <Text style={styles.infoText}>{store.expenses.length}</Text>
         </View>
         <View style={styles.info}>
            <Text style={styles.infoHeader}>Всего потрачено</Text>
            <Text style={styles.infoText}>{store.allExpensesComputed} &#8381;</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 50,
   },
   info: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   infoHeader: {
      fontSize: 23,
      fontWeight: 'bold',
   },
   infoText: {
      fontSize: 20,
   },
   button: {
      width: 200,
      height: 40,
      marginTop: 20,
      backgroundColor: '#2391FF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonText: {
      color: '#FFF',
      fontSize: 18,
   },
});

export default Main;
