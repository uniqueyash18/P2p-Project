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
import {textScale, width} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';
import {useNavigation} from '@react-navigation/native';
import CheckBoxWIthTitle from '../../Components/CheckBoxWIthTitle';
import {ScrollView} from 'react-native-gesture-handler';
import {requestUserPermission} from '../../utils/notificationService';
import {signup} from '../../redux/actions/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { validateFields } from '../../utils/helperFunctions';
interface PropTypes {
  data?: any;
}
type LoginScreenNavigationProp = StackNavigationProp<any>;
interface ComponentStates {
  phoneNumber: String;
  email: String;
  name: String;
  password: any;
  confirmPassword: any;
  hidePass: Boolean | undefined;
  hideConfirmPass: Boolean | undefined;
  isAmazonAccount: Boolean;
  isFlipkartAccount: Boolean;
  isMyntraAccount: Boolean;
}
const Signup: FC<PropTypes> = ({data}: PropTypes) => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [state, setState] = useState<ComponentStates>({
    phoneNumber: '',
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    hidePass: true,
    hideConfirmPass: true,
    isAmazonAccount: false,
    isFlipkartAccount: false,
    isMyntraAccount: false,
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
    isAmazonAccount,
    isFlipkartAccount,
    isMyntraAccount,
  } = state;
  const updateState = (data: Partial<ComponentStates>) =>
    setState(state => ({...state, ...data}));

  const onSignUp = async () => {
    if(!validateFields({
      phonenumber: String(phoneNumber),
      email: email,
      name: name,
      password: password,
      confirmPassword:confirmPassword
    })){
      return
    }
    const fcm_token = await requestUserPermission();
      await signup({
      phonenumber: phoneNumber,
      email: email,
      name: name,
      password: password,
      isAdmin: false,
      fcm_token: fcm_token,
    }).then((res)=>{
      navigation.navigate(navigationStrings.OtpVerify,res)
    }).catch(()=>{})

  };
  return (
    <WrapperContainer isSafeArea={true}>
      <ScrollView
        style={styles.bottomview}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topview}>
          <Image
            style={{resizeMode: 'contain', width: width / 1.5}}
            source={imagePath.newLogo}
          />
        </View>
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
              keyboardType="numeric"
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
              secureTextEntry={hidePass as undefined}
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
              secureTextEntry={hideConfirmPass as undefined}
            />
          </View>
          {/* <View>
            <Text>
              {t("Do_YOU_HAVE_ANY_ACCOUNT")}
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:moderateScale(6)}}>
              <CheckBoxWIthTitle oncheck={()=>updateState({isAmazonAccount:!isAmazonAccount})} title={'Amazon'} isChecked={isAmazonAccount}/>
              <CheckBoxWIthTitle oncheck={()=>updateState({isFlipkartAccount:!isFlipkartAccount})} title={'Flipkart'} isChecked={isFlipkartAccount}/>
              <CheckBoxWIthTitle oncheck={()=>updateState({isMyntraAccount:!isMyntraAccount})} title={'Myntra'} isChecked={isMyntraAccount}/>
            </View>
          </View> */}
        </View>
      </ScrollView>
      <GradientButton
        onPress={() => {
          // navigation.navigate(navigationStrings.OtpVerify,{
          //   phonenumber: phoneNumber,
          //   email: email,
          //   name: name,
          //   password: password,
          //   isAdmin: false,
          // });
          onSignUp();
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
          marginTop: moderateVerticalScale(10),
        }}
        borderRadius={8}
      />
      <View style={styles.dontHaveAcc}>
        <Text style={{fontSize: textScale(14)}}>
          {t('ALREADY_HAVE_ACC')}
          <Text
            onPress={() => {
              navigation.navigate(navigationStrings.Login);
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
