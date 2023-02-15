import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigationType } from '../hooks/hooks';

const ButtonAdd = () => {
   const navigate = useNavigationType();

   const openAddExpenseScreen = () => {
      navigate.navigate('AddExpense');
   };

   console.log(navigate);

   return (
      <View style={styles.container}>
         <Pressable style={styles.button} onPress={openAddExpenseScreen}>
            <Text style={styles.buttonTitle}>+</Text>
         </Pressable>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingBottom: 30,
      paddingRight: 15,
      backgroundColor: '#F2F2F2',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row',
   },
   button: {
      marginLeft: 'auto',
      backgroundColor: '#2391FF',
      justifyContent: 'center',
      alignItems: 'center',
      width: 65,
      height: 65,
      marginRight: 15,
      borderRadius: 35,
   },
   buttonTitle: {
      fontSize: 25,
      color: '#FFF',
   },
});

export default ButtonAdd;
