import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ExpensesItem from '../components/ExpensesItem';
import { useStore } from '../stores/Global.store';
import Container from '../components/Container';

// не обновляется сразу из-за особенностей навигации или mst
// не прокручивается вниз flatlist
const ExpensesScreen: React.FC = () => {
   const store = useStore();

   return (
      <Container page={'Все расходы'} isButtonAdd>
         <View style={styles.container}>
            <FlatList
               data={store.expenses}
               renderItem={({ item }) => <ExpensesItem key={item.id} expense={item} />}
            />
         </View>
      </Container>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: 30,
   },
});

export default ExpensesScreen;
