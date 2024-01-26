import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login/Login'
import navigationStrings from '../constants/navigationStrings'
const Stack=createNativeStackNavigator()
const AccountStack = () => {
  return (
    <>
   <Stack.Screen component={Login} name={navigationStrings.Login}/>
    </>
  )
}

export default AccountStack