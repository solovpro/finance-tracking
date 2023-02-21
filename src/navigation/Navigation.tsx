import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
            <Stack.Screen name='Main' component={Main} options={{ title: 'Главная' }} />
            <Stack.Screen name='Expenses' component={Expenses} options={{ title: 'Расходы' }} />
            <Stack.Screen name='AddExpense' component={AddExpense} options={{ title: 'Добавить расход' }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default Navigation;
