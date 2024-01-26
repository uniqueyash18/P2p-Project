import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  header: {
    marginTop: moderateVerticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifycode: {
    fontSize: textScale(24),
    flex: 1,
    fontWeight: '600',
    color: colors.black,
  },
  topview:{
    flex:0.5
  },
  codesendto:{
    marginTop:moderateVerticalScale(30),
    textAlign:'center',
    fontSize:textScale(14)
  },
  usernumber:{
    fontWeight:'600'
  }
});
