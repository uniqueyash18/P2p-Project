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





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // useEffect(()=>{
  // GoogleSignin.configure({
  // webClientId: '',
  // });
  // },[])
  useEffect(()=>{
   (async ()=>{
     await requestUserPermission()
     notificationListener()
    })()
    },[])
  
  return (
    <View style={{flex:1}}>
      <ForegroundHandler />
      <Routes/>
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
