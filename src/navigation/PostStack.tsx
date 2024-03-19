import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import Homescreen from '../Screens/HomeScreen/HomeScreen';
import AddPost from '../Screens/AddPost/AddPost';

const PostStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen 
        name={navigationStrings.AddPost}
        component={AddPost}
      />
    </Stack.Navigator>
  );
};

export default PostStack;
