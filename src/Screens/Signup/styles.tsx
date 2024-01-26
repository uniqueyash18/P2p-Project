import {StyleSheet} from 'react-native';
import {textScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import {moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  topview: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2,
  },
  logintxt: {
    fontSize: textScale(24),
    fontFamily: fontFamily.medium,
  },
  bottomview: {
    marginTop: moderateVerticalScale(30),
    flex:0.8
  },
  inputarea: {
    marginTop: moderateVerticalScale(24),
  },
  forgot: {
    textAlign: 'right',
    fontSize: textScale(14),
    color: colors.themeColor,
  },
  horizontalLine: {
    height: 1,
    borderWidth: 1,
    borderColor: colors.borderColor,
    flex: 1,
  },
  orLoginView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:moderateVerticalScale(32)
  },
  socialview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  dontHaveAcc:{
    alignItems:'center',
    marginVertical:moderateVerticalScale(12)
  }
});
