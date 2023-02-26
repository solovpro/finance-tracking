import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { useNavigationType } from '../hooks/hooks';

import SvgBackArrow from '../assets/svg/SvgBackArrow';

interface ContainerProps {
   isButtonAdd: boolean;
   isArrow: boolean;
   page: string;
}

const Container: React.FC<ContainerProps> = ({ page, isArrow = false, isButtonAdd = false }) => {
   const navigation = useNavigationType();

   const openFormScreen = () => {
      navigation.navigate('Form');
   };

   const comeBack = () => {
      navigation.goBack();
   };

   return (
      <View style={styles.header}>
         {isArrow && (
            <TouchableOpacity style={styles.headerImage_Container} onPress={comeBack}>
               <SvgBackArrow />
            </TouchableOpacity>
         )}
         <Text
            style={[
               styles.headerTitle,
               isArrow && styles.headerTitle_Arrow,
               isButtonAdd && styles.headerTitle_Button,
            ]}
         >
            {page}
         </Text>
         {isButtonAdd && (
            <TouchableOpacity style={styles.buttonAdd} onPress={openFormScreen}>
               <Text style={styles.buttonAddTitle}>+</Text>
            </TouchableOpacity>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      height: 60,
      marginHorizontal: 'auto',
      backgroundColor: '#2391FF',
      fontWeight: 'bold',
   },
   headerTitle: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold',
   },
   headerTitle_Arrow: {
      marginRight: 'auto',
      marginLeft: -50,
   },
   headerTitle_Button: {
      marginRight: -65,
      marginLeft: 'auto',
   },
   headerImage: {
      width: 30,
      height: 30,
   },
   headerImage_Container: {
      marginRight: 'auto',
      marginLeft: 30,
   },
   buttonAdd: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      marginLeft: 'auto',
   },
   buttonAddTitle: {
      color: '#FFF',
      fontSize: 30,
      fontWeight: 'bold',
   },
});

export default Container;
