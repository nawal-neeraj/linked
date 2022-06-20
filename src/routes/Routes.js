import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';
import RNExitApp from 'react-native-exit-app';


import {Home} from '../screens/Home'
import {Profile} from '../screens/Profile'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


  function HomeRouter() {
    return (
      <Drawer.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown:false }}
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