import React, { FC, ReactNode, useRef } from 'react';
import { StatusBar, View,SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Loader from './Loader';
import colors from '../styles/colors';
import { moderateScale } from 'react-native-size-matters';
interface Proptypes{
  children:ReactNode,
  isLoading? :boolean,
  bgColor?:string,
  statusBarColor?:string,
  barStyle ?:string,
  withModal?: boolean,
  isSafeArea?:boolean
}
const WrapperContainer:FC<Proptypes> = ({
  children,
  isLoading = false,
  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
  withModal = false,
  isSafeArea = true
}:Proptypes) => {
  const keyboardDismiss = useRef(null);
  if(isSafeArea){
    return(
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}>
      <StatusBar
        backgroundColor={ statusBarColor}
        barStyle={barStyle as any}
      />
       <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View  ref={keyboardDismiss}  style={{ backgroundColor: bgColor,flex: 1,marginHorizontal:moderateScale(12)}}>{children}</View>
      </TouchableWithoutFeedback>
      <Loader isLoading={isLoading} withModal={withModal} />
    </SafeAreaView>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:statusBarColor,
        marginHorizontal:moderateScale(12)
      }}>
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={barStyle as any}
      />
      <View style={{ backgroundColor: bgColor, flex: 1 }}>{children}</View>
      <Loader isLoading={isLoading} withModal={withModal} />
    </View>
  );
};

export default React.memo(WrapperContainer);
