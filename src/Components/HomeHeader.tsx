import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {FC} from 'react';
import WrapperContainer from './WrapperContainer';
import FastImage from 'react-native-fast-image';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {textScale, width} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
interface Proptypes {
  location?: Object;
  onPressLoc?: Function;
}
const HomeHeader: FC<Proptypes> = ({location, onPressLoc}: Proptypes) => {
  return (
    <View>
      <View style={styles.container}>
        <FastImage
          source={imagePath.ooryksIcon}
          resizeMode="contain"
          style={styles.iconStyle}
        />
        <View style={styles.centerarea}>
          <Image source={imagePath.locationIcon} />
          <Text numberOfLines={1} style={styles.location}>
            28B,Chandigarh, India
          </Text>
          {/* <Image source={imagePath.downArrow} /> */}
        </View>
        <TouchableOpacity style={styles.iconStyle}>
          <FastImage
            style={styles.notibell}
            source={imagePath.bellicon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchbar}>
          <Image source={imagePath.searchIcon} />
          <TextInput editable={false} style={styles.textbar}/>
        </View>
        <TouchableOpacity style={styles.filterIcon} >
        <Image source={imagePath.fliterIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateVerticalScale(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: moderateVerticalScale(70),
    width: moderateScale(40),
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerarea: {
    flex: 0.8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  location: {
    marginHorizontal: moderateScale(12),
    maxWidth: moderateScale(width / 2.5),
    textAlign: 'center',
    fontFamily: fontFamily.ProximaNovaMedium,
    fontSize: textScale(14),
  },
  notibell: {
    height: moderateVerticalScale(20),
    width: moderateScale(20),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchbar: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    paddingHorizontal:moderateScale(12),
    borderRadius:moderateScale(6),
  },
  textbar:{
    marginHorizontal:moderateScale(12),
    flex:1
  },
  filterIcon:{
    marginLeft:moderateScale(12)
  }
});
export default HomeHeader;
