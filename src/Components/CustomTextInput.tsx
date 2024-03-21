import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { FC } from 'react';
import colors from '../styles/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import { textScale } from '../styles/responsiveSize';
interface Proptypes{
  value: any;
  containerStyles?: object;
  leftImg?: any;
  rightImg?: any;
  isLeft?: boolean;
  isRight?: boolean;
  placeholder?: string;
  placeHolderColor?: string;
  textInputStyles?: object;
  keyboardType?: string;
  onChangeText?: (val: any) => void;
  rightImageStyle?: object;
  leftImageStyle?: object;
  secureTextEntry?: boolean;
  onPressRight?: () => void;
  maxLength?:number
}
export const CustomTextInput: FC<Proptypes> = ({
  value,
  containerStyles={},
  leftImg,
  rightImg,
  isLeft=!!leftImg?true:false,
  isRight=!!rightImg?true:false,
  placeholder,
  placeHolderColor=colors.blackOpacity43,
  textInputStyles={},
  keyboardType='default',
  onChangeText=()=>{},
  rightImageStyle={},
  leftImageStyle={},
  secureTextEntry=false,
  onPressRight=()=>{},
  maxLength,
  ...props
}:Proptypes) => {
  return (
    <View style={{...styles.container, ...containerStyles}}>
      {!!isLeft && 
      <TouchableOpacity>
        <Image style={{...styles.leftstyle,...leftImageStyle}as any} source={leftImg} />
      </TouchableOpacity>}
      <TextInput
        placeholder={placeholder}
        style={{...styles.textinputStyles,...textInputStyles}}
        value={value}
        keyboardType={keyboardType as any}
        placeholderTextColor={placeHolderColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        {...props}
      />
      {!!isRight && 
      <TouchableOpacity onPress={onPressRight}>
        
        <Image style={{...styles.rightstyle,...rightImageStyle}as any} source={rightImg} />
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: moderateScale(6),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:moderateScale(12)
  },
  textinputStyles: {
    fontSize:textScale(14),
    flex:1,
    padding:moderateScale(12),
    color:colors.blackOpacity66
  },
  rightstyle:{
  },
  leftstyle:{
  }
});
