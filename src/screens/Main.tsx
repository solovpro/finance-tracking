import React from 'react';
import { Alert, Button } from 'react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigationType } from '../hooks/hooks';

const Main: React.FC = () => {
   const navigate = useNavigationType();
   return (
      <View style={styles.container}>
         <Text>Main</Text>
         <Button title={'button'} onPress={() => navigate.navigate('Expenses')} />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {},
});

export default Main;
