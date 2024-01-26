import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { CustomTextInput } from '../../Components/CustomTextInput';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';
import { styles } from './styles';
import { changeLang } from '../../utils/helperFunctions';
interface ComponentState{
  phoneNumber:number,
  passWord:any,
  hidePass:boolean
}
interface PropTypes{
  data?:any
}

const Login:FC<PropTypes>=({data}:PropTypes) => {
  const navigation=useNavigation()
  const {t} = useTranslation();
  const [state, setState] = useState<ComponentState>({
    phoneNumber: 0,
    passWord:'',
    hidePass:false,
  });

  const {phoneNumber,passWord, hidePass} = state;
  const updateState = (data :any) => setState(state => ({...state, ...data}));
  const onPressRight = () => [
    updateState({
      hidePass: !hidePass,
    }),
  ];

  return (
    <WrapperContainer isSafeArea={true}>
      <View style={styles.topview}>
        <Image source={imagePath.logo} />
      </View>
      <KeyboardAwareScrollView style={styles.bottomview}>
        <View>
          <Text style={styles.logintxt}>{t('Log_In')}</Text>
          <View style={styles.inputarea}>
            <CustomTextInput
              value={phoneNumber}
              keyboardType="numeric"
              placeholder={t('Phone_number')}
              onChangeText={val => {
                updateState({phoneNumber: val});
              }}
            />
            <CustomTextInput
              value={passWord}
              keyboardType="numeric"
              placeholder={t('Password')}
              onChangeText={val => {
                updateState({passWord: val});
              }}
              rightImg={imagePath.hideEye}
              containerStyles={{marginVertical: moderateScale(24)}}
              rightImageStyle={{height: moderateVerticalScale(20)}}
              onPressRight={onPressRight}
              secureTextEntry={hidePass}
            />
            <TouchableOpacity>
            <Text style={styles.forgot}>{t('Forgot_Passsword')}</Text>
            </TouchableOpacity>
          </View>
          <GradientButton
            btnText={t('LOGIN')}
            textStyle={{
              color: colors.white,
              fontSize: textScale(14),
              fontFamily: fontFamily.medium,
            }}
            colorsArray={[colors.black, colors.black]}
            containerStyle={{
              height: moderateVerticalScale(40),
              marginTop: moderateVerticalScale(32),
            }}
            borderRadius={8}
          />
        </View>
        <View style={styles.orLoginView}>
          <View style={styles.horizontalLine}/>
          <Text style={{marginHorizontal:moderateScale(12),color:colors.textGreyB}}> {t('Or_Login_with')}</Text>
          <View style={styles.horizontalLine}/>
        </View>
        <View style={styles.socialview}>
          <TouchableOpacity>
            <Image source={imagePath.applelogo}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:moderateScale(30)}}>
            <Image source={imagePath.goodleLogo}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.facebooklogo}/>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.dontHaveAcc}>
          <Text style={{fontSize:textScale(14)}}>{t('DONT_HAVE_ACCOUNT')}
          <Text onPress={()=>{navigation.navigate(navigationStrings.Signup as never)}} style={{color:colors.themeColor}}> {t('SIGNUP')}</Text>
          </Text>
        </View>
    </WrapperContainer>
  );
};

export default Login;
