import { View, Text } from 'react-native'
import React, { FC } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import { t } from 'i18next'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import navigationStrings from '../../constants/navigationStrings'
import { StackNavigationProp } from '@react-navigation/stack'
import AccountListComp from '../../Components/AccountListComp'
import imagePath from '../../constants/imagePath'
import { onLogOut } from '../../redux/actions/auth'
import { moderateVerticalScale } from 'react-native-size-matters'
interface Proptypes{
    data?:object
}
const Account :FC<Proptypes> = ({data}:Proptypes) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const listItems =[
        {id:1,title:"Profile",onPress:()=>navigation.navigate(navigationStrings.Profile),leftIcon:imagePath.profileicon},
        {id:2,title:"My Deals",onPress:()=>navigation.navigate(navigationStrings.MyDeals),leftIcon:imagePath.deal},
        {id:3,title:"Contact Us",onPress:()=>navigation.navigate(navigationStrings.ContactUs),leftIcon:imagePath.contactUs},
        {id:4,title:"About",onPress:()=>navigation.navigate(navigationStrings.About),leftIcon:imagePath.about},
        {id:5,title:"Logout",onPress:()=>onLogOut(),leftIcon:imagePath.logout},
    ]
  return (
<WrapperContainer>
    <Header cetnerTitle={t("ACCOUNT")} isLeft={false}/>
    {listItems.map((item)=>{
        return(
            <AccountListComp containerStyles={{marginVertical:moderateVerticalScale(20)}} leftIcon={item?.leftIcon} centerTitle={item?.title} onPressItem={item?.onPress}/>
        )
    })}
</WrapperContainer>
  )
}

export default Account