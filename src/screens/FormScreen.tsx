import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Formik } from 'formik';

import { useNavigationType } from '../hooks/hooks';
import { useStore } from '../stores/Global.store';
import Container from '../components/Container';
import { NewExpense } from '../types/types';

const FormScreen: React.FC = () => {
   const [calendar, setCalendar] = useState<boolean>(false);
   const store = useStore();
   const navigation = useNavigationType();
   return (
      <Container page={'Добавить расход'} isArrow>
         <Formik
            initialValues={{ name: '', price: '', date: '', category: '' }}
            onSubmit={(values: NewExpense) => {
               store.createNewExpense(values);
               Alert.alert('Новый расход успешно добавлен');
               navigation.goBack();
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
                  {/*<TouchableOpacity*/}
                  {/*   onPress={() => {*/}
                  {/*      setCalendar(true);*/}
                  {/*   }}*/}
                  {/*   style={styles.input}*/}
                  {/*>*/}
                  {/*   <Text style={styles.inputText}>Дата</Text>*/}
                  {/*</TouchableOpacity>*/}
                  <TextInput
                     style={styles.input}
                     placeholder={'Дата'}
                     onPressIn={() => {
                        setCalendar(true);
                     }}
                     onChangeText={handleChange('date')}
                  />
                  {/*{calendar && (*/}
                  {/*   <Calendar*/}
                  {/*      minDate={'2021-05-10'}*/}
                  {/*      maxDate={'2024-05-30'}*/}
                  {/*      onDayPress={day => {*/}
                  {/*         handleChange('date');*/}
                  {/*         console.log(values.date);*/}
                  {/*         setCalendar(false);*/}
                  {/*      }}*/}
                  {/*   />*/}
                  {/*)}*/}
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

export default FormScreen;
