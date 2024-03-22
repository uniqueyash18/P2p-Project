import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import { textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import imagePath from '../constants/imagePath';
interface Proptypes {
  leftIcon: string;
  centerTitle: string;
  onPressItem: () => void;
  containerStyles?:object
}
const AccountListComp: FC<Proptypes> = ({
  leftIcon,
  centerTitle,
  onPressItem,
  containerStyles
}: Proptypes) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={{...styles.container,...containerStyles}}>
      <Image
        source={leftIcon as any}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>
        {centerTitle}
      </Text>
      <Image
        source={imagePath.backAngle}
        resizeMode="contain"
        style={styles.rightImageStyle}
      />
    </TouchableOpacity>
  );
};

export default AccountListComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(12),
  },
  imageStyle:{height: moderateVerticalScale(22), width: moderateScale(22),flex:0.2,resizeMode:'contain'},
  textStyle:{
    fontSize:textScale(18),
    flex:1,
    fontFamily:fontFamily.ProximaNovaMedium
  },
  rightImageStyle:{
    height:moderateVerticalScale(16),
    width:moderateScale(16),
    transform:[{rotate:'180deg'}],
    resizeMode:"contain"
  }
});
