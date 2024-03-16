import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import fontFamily from "../../styles/fontFamily";
import { textScale } from "../../styles/responsiveSize";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    flatstyle:{
        marginVertical:moderateVerticalScale(12)
    },
    dealstypeHeading:{
        fontFamily:fontFamily.ProximaNovaBold,
        fontSize:textScale(16)
    },
    dealtypeview:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:moderateScale(20),
        borderRadius:moderateScale(8),
        borderWidth:1,
        borderColor:colors.borderColor,
        margin:moderateScale(6)
    },
    dealtypetitle:{
        fontFamily:fontFamily.ProximaNovaBold,
        fontSize:textScale(14)
    }
})