import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import Homescreen from '../Screens/HomeScreen/HomeScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen 
        name={navigationStrings.Homescreen}
        component={Homescreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
