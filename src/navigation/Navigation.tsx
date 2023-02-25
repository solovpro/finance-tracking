import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ExpensesScreen from '../screens/ExpensesScreen';
import FormScreen from '../screens/FormScreen';
import HomeScreen from '../screens/HomeScreen';

import SvgExpenses from '../assets/svg/SvgExpenses';
import SvgHome from '../assets/svg/SvgHome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
   return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
         <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
               tabBarLabel: 'Главная',
               tabBarIcon: ({ focused }) => <SvgHome focused={focused} />,
            }}
         />
         <Tab.Screen
            name='Expenses'
            component={ExpensesScreen}
            options={{
               tabBarLabel: 'Все расходы',
               tabBarIcon: ({ focused }) => <SvgExpenses focused={focused} />,
            }}
         />
      </Tab.Navigator>
   );
};

const Navigation: React.FC = () => {
   return (
      <Stack.Navigator initialRouteName='TabStack' screenOptions={{ headerShown: false }}>
         <Stack.Screen name='TabStack' component={TabStack} />
         <Stack.Screen name='Form' component={FormScreen} />
      </Stack.Navigator>
   );
};

export default Navigation;
