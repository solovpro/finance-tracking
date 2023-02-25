import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { useNavigationType } from '../hooks/hooks';

import SvgBackArrow from '../assets/svg/SvgBackArrow';

interface ContainerProps {
   page: string;
   children: React.ReactNode;
   isArrow?: boolean;
   isButtonAdd?: boolean;
}

const Container: React.FC<ContainerProps> = ({ page, children, isArrow = false, isButtonAdd = false }) => {
   const navigation = useNavigationType();

   const openFormScreen = () => {
      navigation.navigate('Form');
   };

   const comeBack = () => {
      navigation.goBack();
   };

   return (
      <View style={styles.container}>
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
         <View>{children}</View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
   },
   header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 37,
      height: 97,
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
