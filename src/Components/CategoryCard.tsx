import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {width} from '../styles/responsiveSize';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../styles/colors';
interface Proptypes {
  data: any;
}
const CategoryCard: FC<Proptypes> = ({data}: Proptypes) => {
  return (
    <View
      style={{
        width: (width / 2)-20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.backgroundGreyC,
        borderRadius:8,
        padding:moderateScale(6)
      }}>
      <Image
        style={{
          width: (width / 2)-40,
          height: moderateVerticalScale(60),
          resizeMode: 'contain',
        }}
        source={data?.item?.image}
      />
    </View>
  );
};

export default CategoryCard;
