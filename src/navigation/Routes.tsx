import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import TabRoutes from './TabRoutes';


export default function Routes() {
  const Stack = createNativeStackNavigator();
  const appSessionInfo = 'main';
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {appSessionInfo == 'guest'?
         <Stack.Screen
         component={TabRoutes}
         name="TabRoutes"
       />:
        AuthStack()
         
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
