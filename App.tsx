/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/navigation/Routes';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import i18next from 'i18next';

type SectionProps = PropsWithChildren<{
  title: string;
}>;




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // useEffect(()=>{
  // GoogleSignin.configure({
  // webClientId: '',
  // });
  // },[])
  return (
    <View style={{flex:1}}>
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
