import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigation/Navigation';

import { globalStore, StoreProvider } from './src/stores/Global.store';

const store = globalStore.create();

const App: React.FC = () => (
   <StoreProvider value={store}>
      <Navigation />
      <StatusBar backgroundColor='#0371DF' />
   </StoreProvider>
);

export default App;
