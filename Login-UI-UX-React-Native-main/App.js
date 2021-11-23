import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
     <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
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
