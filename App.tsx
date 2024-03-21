/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';

import Routes from './src/navigation/Routes';
import ForegroundHandler from './src/utils/ForegroundHandler';
import { notificationListener, requestUserPermission } from './src/utils/notificationService';
import { getItem, setItem } from './src/services/apiService';
import { setUserdata } from './src/redux/reducers/auth';
import FlashMessage from 'react-native-flash-message';
import { useDispatch } from 'react-redux';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch =useDispatch()
  // useEffect(()=>{
  // GoogleSignin.configure({
  // webClientId: '',
  // });
  // },[])
  useEffect(()=>{
   (async ()=>{
    // setItem("userData",null)
    // dispatch(setUserdata(null))
    const userData= getItem("userData")
    if(!!userData){
      dispatch(setUserdata(userData))
    }

     notificationListener()
    })()
    },[])
  
  return (
    <View style={{flex:1}}>
      <ForegroundHandler />
      <Routes/>
      <FlashMessage position="top" />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
