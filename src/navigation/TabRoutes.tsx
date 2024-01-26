import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainStack from './MainStack'
import navigationStrings from '../constants/navigationStrings'
import OrderStack from './OrderStack'
import ChatStack from './ChatStack'
import AccountStack from './AccountStack'
const Tab =createBottomTabNavigator()
const TabRoutes = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen component={MainStack} name={navigationStrings.HomeStack}/>
        <Tab.Screen component={OrderStack} name={navigationStrings.OrderStack}/>
        <Tab.Screen component={ChatStack} name={navigationStrings.ChatStack}/>
        <Tab.Screen component={AccountStack} name={navigationStrings.AccountStack}/>
    </Tab.Navigator>
   
  )
}

export default TabRoutes