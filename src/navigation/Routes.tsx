import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import TabRoutes from './TabRoutes';
import { useSelector } from 'react-redux';
import AdminTab from './AdminTab';


export default function Routes() {
  const Stack = createNativeStackNavigator();
  const userData =useSelector((state)=>state?.auth?.userData)
  console.log(userData,'userDatauserData')
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {!!userData?.authToken ?
       <>{
          !!userData?.isAdmin ?
          <Stack.Screen
          component={AdminTab}
          name='AdminTab'
          />
          :
          <Stack.Screen
          component={TabRoutes}
          name="TabRoutes"
        />
        }
        </>
        :
        AuthStack()
         
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
