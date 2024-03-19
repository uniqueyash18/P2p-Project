
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainStack from './MainStack'
import navigationStrings from '../constants/navigationStrings'
import OrderStack from './OrderStack'
import ChatStack from './ChatStack'
import AccountStack from './AccountStack'
import PostStack from './PostStack'

const AdminTab = () => {
  const Tab =createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen component={MainStack} name={navigationStrings.HomeStack}/>
        <Tab.Screen component={PostStack} name={navigationStrings.PostStack}/>
        <Tab.Screen component={ChatStack} name={navigationStrings.ChatStack}/>
        <Tab.Screen component={AccountStack} name={navigationStrings.AccountStack}/>
    </Tab.Navigator>
   
  )
}

export default AdminTab