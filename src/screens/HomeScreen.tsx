import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useStore } from '../stores/Global.store';
import Container from '../components/Container';
import ExpensesItem from '../components/ExpensesItem';

const HomeScreen: React.FC = () => {
   let store = useStore();

   return (
      <Container page={'Главная'}>
         <View style={styles.container}>
            <View style={styles.info}>
               <Text style={styles.infoHeader}>Записей о расходах</Text>
               <Text style={styles.infoText}>{store.expenses.length}</Text>
            </View>
            <View style={styles.info}>
               <Text style={styles.infoHeader}>Всего потрачено</Text>
               <Text style={styles.infoText}>{store.allExpensesComputed} &#8381;</Text>
            </View>
            <View style={styles.info}>
               <Text style={styles.infoHeader}>Самая частая категория</Text>
               <Text style={styles.infoText}>{store.mostUsedCategories}</Text>
            </View>
            <View style={styles.info}>
               <Text style={styles.infoHeader}>Все названия расходов</Text>
               <FlatList
                  data={store.namesComputed}
                  renderItem={({ item }) => <Text style={styles.infoText}>- {item}</Text>}
               />
            </View>
         </View>
      </Container>
   );
};

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      alignItems: 'center',
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
      marginTop: 10,
      fontSize: 18,
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

export default HomeScreen;
