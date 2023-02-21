import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Formik } from 'formik';
import { useStore } from '../stores/Global.store';
import { NewExpense } from '../types/types';
import { useNavigationType } from '../hooks/hooks';

const AddExpense: React.FC = () => {
   const store = useStore();
   const navigate = useNavigationType();
   return (
      <Formik
         initialValues={{ name: '', price: '', date: '', category: '' }}
         onSubmit={(values: NewExpense) => {
            store.createNewExpense(values);
            navigate.navigate('Main');
         }}
      >
         {({ handleChange, handleSubmit, values }) => (
            <View style={styles.container}>
               <TextInput
                  style={styles.input}
                  placeholder={'Название'}
                  onChangeText={handleChange('name')}
                  value={values.name}
               />
               <TextInput
                  style={styles.input}
                  placeholder={'Цена'}
                  onChangeText={handleChange('price')}
                  value={values.price}
               />
               <TextInput
                  style={styles.input}
                  placeholder={'Дата'}
                  onChangeText={handleChange('date')}
                  value={values.date}
               />
               <TextInput
                  style={styles.input}
                  placeholder={'Категория'}
                  onChangeText={handleChange('category')}
                  value={values.category}
               />
               {
                  // Я обозначил handleSubmit как any, поскольку есть некоторые проблемы
                  // совместимости react-native с formik и чтобы не мудрить с типами и
                  // было понятно, что есть проблемы с совместимостью, я решил использовать any
                  // пусть это и не лучшая практика
               }
               <Pressable style={styles.button} onPress={handleSubmit as any}>
                  <Text style={styles.buttonTitle}>Добавить</Text>
               </Pressable>
            </View>
         )}
      </Formik>
   );
};

const styles = StyleSheet.create({
   container: {
      marginTop: 60,
   },
   input: {
      borderColor: '#AAA',
      borderRadius: 10,
      borderWidth: 1,
      marginLeft: '10%',
      marginBottom: 35,
      fontSize: 20,
      paddingHorizontal: 10,
      width: '80%',
      height: 45,
   },
   button: {
      marginLeft: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2391FF',
      width: '80%',
      height: 55,
      marginTop: 35,
      borderRadius: 15,
   },
   buttonTitle: {
      color: '#FFF',
      fontSize: 20,
   },
});

export default AddExpense;
