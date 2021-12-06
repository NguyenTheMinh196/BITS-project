import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Request from './screens/Request';
import RequestDetailPage from './screens/RequestDetailPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'native-base';


const Stack = createStackNavigator();

                                                                                                                                   
function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
     
     <Stack.Screen name="RequestDetailPage" component={RequestDetailPage} />
     
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}
