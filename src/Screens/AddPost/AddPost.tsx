import { t } from 'i18next';
import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import CheckBoxWIthTitle from '../../Components/CheckBoxWIthTitle';
import Header from '../../Components/Header';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import { width } from '../../styles/responsiveSize';
import { styles } from './styles';
interface Proptypes {
  data?: any;
}
interface ComponentState{
  postTypes:Object[],
  dealPlatform:object[]
}
const AddPost: FC<Proptypes> = ({data}: Proptypes) => {
  const [state, setState] = useState<ComponentState>({
    postTypes: [
      {value: 'Review', label: 'Review',isSelected:false},
      {value: 'Rating', label: 'Rating',isSelected:false},
      {value: 'Order Only', label: 'Order Only',isSelected:false},
    ],
    dealPlatform: [
      {value: 'Amazon', label: 'Amazon',isSelected:false},
      {value: 'Myntra', label: 'Myntra',isSelected:false},
      {value: 'Flipkart', label: 'Flipkart',isSelected:false},
      {value: 'Ajio', label: 'Ajio',isSelected:false},
    ],
  });

  const {postTypes,dealPlatform} = state;
  const updateState = (data :any) => setState(state => ({...state, ...data}));
  const onSelectPostType=(allValue:object[],val:any,keyToUpdate:string)=>{
    const alltypes:object = allValue.map((item:any)=>{
      if(item?.value ==val.value){
        return {...item,isSelected:!item?.isSelected}
      }
      return item
    })
    switch (keyToUpdate) {
      case "postTypes":updateState({postTypes:alltypes})
        break;
      case "dealPlatform":updateState({dealPlatform:alltypes})
        break;
    }
    updateState({keyToUpdate:alltypes})
  }
  return (
    <WrapperContainer>
      <Header cetnerTitle={t('ADD_POST')} />
      <View style={{height:1,width:width-24,backgroundColor:colors.borderColorE}}/>
      <View style={styles.box}>
       <Text style={styles.title}>
        {t("SELECT_THE_TYPE_OF_DEAL")}
       </Text>
       {postTypes.map((item:any)=>{
        return(
          <CheckBoxWIthTitle oncheck={()=>onSelectPostType(postTypes,item,"postTypes")} isChecked={item?.isSelected} title={item?.value}/>
        )
       })}
      </View>
      <View style={styles.box}>
       <Text style={styles.title}>
        {t("SELECT_THE_DEAL_PLATFORM")}
       </Text>
       {dealPlatform.map((item:any)=>{
        return(
          <CheckBoxWIthTitle oncheck={()=>onSelectPostType(dealPlatform,item,"dealPlatform")} isChecked={item?.isSelected} title={item?.value}/>
        )
       })}
      </View>
    </WrapperContainer>
  );
};

export default AddPost;
