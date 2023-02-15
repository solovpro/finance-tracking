import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ButtonAdd from '../components/ButtonAdd';
import AddExpense from '../screens/AddExpense';
import Expenses from '../screens/Expenses';
import Main from '../screens/Main';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName='Main'
            screenOptions={{
               headerStyle: {
                  backgroundColor: '#2391FF',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
               headerTitleAlign: 'center',
            }}
         >
            <Stack.Screen name='Main' component={Main} options={{ title: 'Main' }} />
            <Stack.Screen name='Expenses' component={Expenses} options={{ title: 'Expenses' }} />
            <Stack.Screen name='AddExpense' component={AddExpense} options={{ title: 'AddExpense' }} />
         </Stack.Navigator>
         <ButtonAdd />
      </NavigationContainer>
   );
};

export default Navigation;
