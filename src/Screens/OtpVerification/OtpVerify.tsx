import {View, Text, Image} from 'react-native';
import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
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
  <Image source={imagePath.backAngle}/>
  <Text style={styles.verifycode}>
    {t('Verification_Code')}
  </Text>
  </View>
  <View style={styles.topview}>
    <Text style={styles.codesendto}>
      {t("A_code_has_been_sent_to")}
      <Text style={styles.usernumber}> +654 652 4168 652.</Text>
    </Text>

  </View>
</WrapperContainer>
  );
};

export default OtpVerify;
