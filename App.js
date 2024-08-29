import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/Store';
import AppContainer from './src/screens/AppContainer';

const MainNavigator = AppContainer;

const App = () => {
   LogBox.ignoreAllLogs(); 
  return (
    
    //   <StatusBar />
    <Provider store={store}>
      <MainNavigator />
    </Provider>
    
  );
};

export default App; 
