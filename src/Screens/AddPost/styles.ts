import { StyleSheet } from "react-native";
import { textScale } from "../../styles/responsiveSize";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import fontFamily from "../../styles/fontFamily";
import colors from "../../styles/colors";

export const styles =StyleSheet.create({
    title:{
        fontFamily:fontFamily.ProximaNovaBold,
        fontSize:textScale(16),
        marginVertical:moderateVerticalScale(6),
        textTransform:'capitalize'
          },
          box:{
            backgroundColor:colors.backgroundGreyC,
            padding:moderateScale(6),
            borderRadius:moderateScale(8),
            marginVertical:moderateVerticalScale(12)
          }
})