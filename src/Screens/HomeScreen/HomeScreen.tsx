import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HomeHeader from '../../Components/HomeHeader'
import CategoryCard from '../../Components/CategoryCard'
import imagePath from '../../constants/imagePath'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'
import colors from '../../styles/colors'
import { ScrollView } from 'react-native-gesture-handler'

interface PropTypes{
    data?:Object
}

const Homescreen:FC<PropTypes> = ({data}:PropTypes) => {
  const {t} = useTranslation()
const [categoryData,SetCategoryData] =useState([
  {id:1,title:'Amazon',image:imagePath.amazonIcon},
  {id:2,title:'Flipkart',image:imagePath.flipkartlogo},
  {id:3,title:'Myntra',image:imagePath.myntaIcon},
  {id:4,title:'Ustraa',image:imagePath.AjioLogo},
])
const [dealsType,setDealsType] =  useState([
  {id:1,title:"Rating Deals",color:colors.light_orange_bg},
  {id:2,title:"Review Deals",color:colors.lightGreen},
  {id:3,title:"Order Only Deals",color:colors.lightSky},
  {id:4,title:"Exchange Deals",color:colors.lightBlueBackground}
])
const categoryView =(data:any)=>{
return (
<TouchableOpacity style={{flex:1}}>
<CategoryCard data={data}/>
</TouchableOpacity>
)}
const dealsView=({item}:any)=>{
  return(
    <View style={{...styles.dealtypeview,backgroundColor:item?.color}}>
      <Text style={styles.dealtypetitle}>
        {item?.title}
      </Text>
    </View>
  )
}
  return (
    <WrapperContainer>
      <HomeHeader location={{}}/>
      <ScrollView>
      <FlatList
      keyExtractor={(item, index) => `key-${index}`}
      ListHeaderComponent={()=>(<View style={{marginVertical:moderateVerticalScale(12)}}>
        <Text style={styles.dealstypeHeading}>
          {t('ALL_CATEGORIES')}
        </Text>
      </View>)}
      numColumns={2}
      horizontal={false}
      data={categoryData}
      renderItem={categoryView}
      ItemSeparatorComponent={()=>(<View style={{height:moderateScale(20)}}/>)}
      />

      <FlatList
      keyExtractor={(item, index) => `key-${index}`}
      ListHeaderComponent={()=>(<View style={{marginVertical:moderateVerticalScale(12)}}>
        <Text style={styles.dealstypeHeading}>
          {t('WHAT_DEALS_YOU_WANT')}
        </Text>
      </View>)}
      numColumns={2}
      horizontal={false}
      data={dealsType}
      renderItem={dealsView}
      />
      </ScrollView>

    </WrapperContainer>
  )
}

export default Homescreen