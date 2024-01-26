import { View, Text } from 'react-native'
import React, { FC } from 'react'
interface Proptypes{
  isLoading:boolean,
  withModal:boolean
}
const Loader : FC<Proptypes>=({isLoading,withModal}:Proptypes) => {
  return (
    <View>
    </View>
  )
}

export default Loader