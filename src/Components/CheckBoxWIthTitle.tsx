import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import imagePath from '../constants/imagePath'
import { moderateScale } from 'react-native-size-matters'
interface Proptypes{
title:String,
isChecked:Boolean,
oncheck:() => void
}
const CheckBoxWIthTitle:FC<Proptypes> = ({title,isChecked,oncheck}:Proptypes) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',marginTop:moderateScale(6)}}>
        <TouchableOpacity onPress={oncheck}>
     <Image source={ isChecked ? imagePath.ic_checked : imagePath.ic_unchecked}/>
        </TouchableOpacity>
     <Text  style={{marginLeft:moderateScale(12)}}>{title}</Text>
    </View>
  )
}

export default CheckBoxWIthTitle