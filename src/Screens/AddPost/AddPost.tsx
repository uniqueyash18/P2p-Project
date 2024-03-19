import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import {t} from 'i18next';
import Dropdown from '../../Components/Dropdown';
interface Proptypes {
  data?: any;
}
interface ComponentState{
  postTypes:Object[],
  selectedPostType:Object
}
const AddPost: FC<Proptypes> = ({data}: Proptypes) => {
  const [state, setState] = useState<ComponentState>({
    postTypes: [
      {value: 'Review', label: 'Review'},
      {value: 'Rating', label: 'Rating'},
      {value: 'Order Only', label: 'Order Only'},
    ],
    selectedPostType:{}
  });

  const {postTypes,selectedPostType} = state;
  const updateState = (data :any) => setState(state => ({...state, ...data}));
  return (
    <WrapperContainer>
      <Header cetnerTitle={t('ADD_POST')} />
      <View>
        {/* <Dropdown value={selectedPostType} options={postTypes} placeholder='Select the post type' onSelect={(val) => {updateState({selectedPostType:val})}} /> */}
      </View>
    </WrapperContainer>
  );
};

export default AddPost;
