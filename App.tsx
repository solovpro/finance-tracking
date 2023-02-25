import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { globalStore, StoreProvider } from './src/stores/Global.store';
import Navigation from './src/navigation/Navigation';

const store = globalStore.create();

const App: React.FC = () => (
   <StoreProvider value={store}>
      <NavigationContainer>
         <Navigation />
         <StatusBar backgroundColor='#0371DF' />
      </NavigationContainer>
   </StoreProvider>
);

export default App;
