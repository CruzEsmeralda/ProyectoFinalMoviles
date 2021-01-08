import React from 'react';
import ZapatosProvider from './Context/ZapatosContext';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';


export default function App() {
  return (
    <ZapatosProvider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </ZapatosProvider>
  );
}



