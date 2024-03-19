import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { moderateVerticalScale } from 'react-native-size-matters';
import GradientButton from '../../Components/GradientButton';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';
import { styles } from './styles';
interface PropTypes {
  route: any;
}
interface ConponentState {}
const OtpVerify: FC<PropTypes> = ({route}: PropTypes) => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const [state, setState] = useState<ConponentState>({});
  const {} = state;
  const updateState = (data: Partial<ConponentState>) =>
    setState(state => ({...state, ...data}));
  return (
<WrapperContainer>
  <View style={styles.header}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
  <Image source={imagePath.backAngle}/>
    </TouchableOpacity>
  <Text style={styles.verifycode}>
    {t('Verification_Code')}
  </Text>
  </View>
  <View style={styles.topview}>
    <Text style={styles.codesendto}>
      {t("A_code_has_been_sent_to")}
      <Text style={styles.usernumber}> +654 652 4168 652.</Text>
    </Text>
    <View style={styles.inputContainer}>
      <OTPTextView 
      inputCount={6}
      tintColor={colors.themeColor}
      keyboardType='numeric'
      textInputStyle={styles.boxInput}
      autoFocus/>
    </View>
    <View style={styles.didNtRecieve}>
      <Text>
        {t('Did_not_recieved_the_code')}
      </Text>
      <TouchableOpacity>
        <Text style={styles.resend}>
          {t('RESEND_CODE')}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  <GradientButton
   textStyle={{
    color: colors.white,
    fontSize: textScale(14),
    fontFamily: fontFamily.medium,
  }}
  colorsArray={[colors.black, colors.black]}
  containerStyle={{
    height: moderateVerticalScale(40),
    marginTop:'auto',
    marginBottom:moderateVerticalScale(20)
  }}
  borderRadius={8}
  btnText={t('VERIFY')}/>
</WrapperContainer>
  );
};

export default OtpVerify;
