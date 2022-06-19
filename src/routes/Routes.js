import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
  } from '@react-navigation/drawer';

import {Home} from '../screens/Home'
import {Profile} from '../screens/Profile'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


  function HomeRouter() {
    return (
      <Drawer.Navigator
        initialRouteName="Dashboard"
        >
        <Drawer.Screen name="Dashboard" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
  

  function AppRouter() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown:false }}>
            <Stack.Screen name="Home" component={HomeRouter}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppRouter;