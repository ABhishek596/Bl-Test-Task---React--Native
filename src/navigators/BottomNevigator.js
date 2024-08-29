import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import Icons from '../components/icons/Icons';
import colors from '../constant/colors';
import CartNavigator from './CartNavigator';
const BottomNevigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icons iconType={'AntDesign'} name="home" color={color} size={30} />
          ),
        }}
      />
 
   
      <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          tabBarLabel: 'AddCartScreen',
          tabBarIcon: ({color, size}) => (
            <Icons
              iconType={'Feather'}
              name="shopping-bag"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icons
              iconType={'Ionicons'}
              name="ios-person-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNevigator;
