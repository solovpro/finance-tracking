import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Header from './Header';

interface ContainerProps {
   children: React.ReactNode;
   isButtonAdd?: boolean;
   isArrow?: boolean;
   page: string;
}

const Container: React.FC<ContainerProps> = ({ page, children, isArrow = false, isButtonAdd = false }) => {
   return (
      <View style={styles.container}>
         <Header page={page} isArrow={isArrow} isButtonAdd={isButtonAdd} />
         <View>{children}</View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingTop: Constants.statusBarHeight,
   },
});

export default Container;
