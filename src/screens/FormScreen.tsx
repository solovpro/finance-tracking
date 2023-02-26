import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

import CategoriesButtons from '../components/CategoriesButtons';
import CalendarModal from '../components/CalendarModal';
import { useNavigationType } from '../hooks/hooks';
import { useStore } from '../stores/Global.store';
import Container from '../components/Container';
import { NewExpense } from '../types/types';

const FormScreen: React.FC = () => {
   const [calendar, setCalendar] = useState<boolean>(false);
   const [categories, setCategories] = useState<boolean>(false);

   const store = useStore();
   const navigation = useNavigationType();

   const onSubmit = (values: NewExpense) => {
      store.createNewExpense(values);
      navigation.goBack();
      Alert.alert('Новый расход успешно добавлен');
   };

   return (
      <Container page={'Добавить расход'} isArrow>
         <Formik
            initialValues={{ name: '', price: '', date: '', category: '' }}
            onSubmit={(values: NewExpense) => {
               onSubmit(values);
            }}
         >
            {({ handleChange, handleSubmit, values, setFieldValue }) => (
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
                  <TouchableOpacity onPress={() => setCalendar(true)} style={styles.input}>
                     <Text style={[styles.inputText, !!values.date && styles.buttonActive]}>
                        {values.date || 'Дата'}
                     </Text>
                  </TouchableOpacity>
                  <CalendarModal
                     setFieldValue={setFieldValue}
                     setCalendar={setCalendar}
                     calendar={calendar}
                  />
                  <TouchableOpacity
                     onPress={() => setCategories(!categories)}
                     style={[styles.input, categories && styles.inputCategory]}
                  >
                     <Text style={[styles.inputText, !!values.category && styles.buttonActive]}>
                        {values.category || 'Категория'}
                     </Text>
                  </TouchableOpacity>
                  {categories && (
                     <CategoriesButtons setFieldValue={setFieldValue} setCategories={setCategories} />
                  )}
                  {
                     // Я обозначил handleSubmit как any, поскольку есть некоторые проблемы
                     // совместимости react-native с formik и чтобы не мудрить с типами и
                     // было понятно, что есть проблемы с совместимостью, я решил использовать any
                  }
                  <Pressable style={styles.button} onPress={handleSubmit as any}>
                     <Text style={styles.buttonTitle}>Добавить</Text>
                  </Pressable>
               </View>
            )}
         </Formik>
      </Container>
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
   inputText: {
      color: '#999',
      paddingVertical: 6,
      fontSize: 20,
   },
   buttonActive: {
      color: '#000',
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
   inputCategory: {
      marginBottom: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
   },
   inputCategory__Item: {
      marginBottom: 1,
      backgroundColor: '#2391FF',
      borderRadius: 0,
   },
   inputCategory__ItemLast: {
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
   },
   inputCategory__Text: {
      color: '#FFF',
   },
});

export default FormScreen;
