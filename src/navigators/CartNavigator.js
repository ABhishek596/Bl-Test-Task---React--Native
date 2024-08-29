import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AddCartScreen from '../screens/addCartScreen/AddCartScreen';
const CartStack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="AddCartScreen">
      <CartStack.Screen
        options={{headerShown: false}}
        name="AddCartScreen"
        component={AddCartScreen}
      />
  
    </CartStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0, // remove shadow on Android
  },
});

export default CartNavigator;
