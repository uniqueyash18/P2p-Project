import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import {CustomTextInput} from '../../Components/CustomTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GradientButton from '../../Components/GradientButton';
import {styles} from './styles';
import imagePath from '../../constants/imagePath';
import {useTranslation} from 'react-i18next';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {textScale} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';
interface PropTypes {
  data?: any;
}
interface ComponentStates {
  phoneNumber: number;
  email: string;
  name: string;
  password: any;
  confirmPassword: any;
  hidePass: boolean;
  hideConfirmPass: boolean;
}

const Signup: FC<PropTypes> = ({data}: PropTypes) => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const [state, setState] = useState<ComponentStates>({
    phoneNumber: 0,
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    hidePass: true,
    hideConfirmPass: true,
  });
  const onPressRightConfirmPass = () => {
    updateState({
      hideConfirmPass: !hideConfirmPass,
    });
  };
  const onPressRightPass = () => {
    updateState({
      hidePass: !hidePass,
    });
  };

  const {
    phoneNumber,
    name,
    email,
    password,
    confirmPassword,
    hidePass,
    hideConfirmPass,
  } = state;
  const updateState = (data: Partial<ComponentStates>) =>
    setState(state => ({...state, ...data}));
  return (
    <WrapperContainer isSafeArea={true}>
      <View style={styles.topview}>
        <Image source={imagePath.logo} />
      </View>
      <KeyboardAwareScrollView style={styles.bottomview}>
        <View>
          <Text style={styles.logintxt}>{t('SIGNUP')}</Text>
          <View style={styles.inputarea}>
            <CustomTextInput
              value={name}
              placeholder={t('NAME')}
              containerStyles={{marginBottom: moderateScale(18)}}
              onChangeText={val => {
                updateState({name: val});
              }}
            />
            <CustomTextInput
              value={phoneNumber}
              placeholder={t('Phone_number')}
              containerStyles={{marginBottom: moderateScale(18)}}
              onChangeText={val => {
                updateState({phoneNumber: val});
              }}
            />
            <CustomTextInput
              value={email}
              keyboardType="email-address"
              placeholder={t('EMAIL')}
              containerStyles={{marginBottom: moderateScale(18)}}
              onChangeText={val => {
                updateState({email: val});
              }}
            />
            <CustomTextInput
              value={password}
              placeholder={t('PASSWORD')}
              containerStyles={{marginBottom: moderateScale(18)}}
              onChangeText={val => {
                updateState({password: val});
              }}
              rightImg={imagePath.hideEye}
              rightImageStyle={{height: moderateVerticalScale(20)}}
              onPressRight={onPressRightPass}
              secureTextEntry={hidePass}
            />
            <CustomTextInput
              value={confirmPassword}
              placeholder={t('CONFIRM_PASSWORD')}
              containerStyles={{marginBottom: moderateScale(18)}}
              onChangeText={val => {
                updateState({confirmPassword: val});
              }}
              rightImg={imagePath.hideEye}
              rightImageStyle={{height: moderateVerticalScale(20)}}
              onPressRight={onPressRightConfirmPass}
              secureTextEntry={hideConfirmPass}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <GradientButton
        onPress={() => {
          navigation.navigate(navigationStrings.OtpVerify as never);
        }}
        btnText={t('SIGNUP')}
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
      <View style={styles.dontHaveAcc}>
        <Text style={{fontSize: textScale(14)}}>
          {t('ALREADY_HAVE_ACC')}
          <Text
            onPress={() => {
              navigation.navigate(navigationStrings.Login as never);
            }}
            style={{color: colors.themeColor}}>
            {' '}
            {t('LOGIN')}
          </Text>
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default Signup;
