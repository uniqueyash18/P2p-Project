import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login/Login'
import navigationStrings from '../constants/navigationStrings'
import Account from '../Screens/Account/Account'
const Stack=createNativeStackNavigator()
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen component={Account} name={navigationStrings.Account}/>
   </Stack.Navigator>
  )
}

export default AccountStack