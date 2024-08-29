import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import CheckoutScreen from '../screens/checkoutScreen/CheckoutScreen';
import ShippingScreen from '../screens/shippingScreen/ShippingScreen';
import OrderPlaced from '../screens/orderDone/OrderPlaced';

const BaseStack = createNativeStackNavigator();

const BaseStackNavigator = () => {
  return (
    <BaseStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="CheckoutScreen">
      <BaseStack.Screen
        options={{headerShown: false}}
        name="CheckoutScreen"
        component={CheckoutScreen}
      />
      <BaseStack.Screen
        options={{headerShown: false}}
        name="ShippingScreen"
        component={ShippingScreen}
      />
    
      <BaseStack.Screen
        options={{headerShown: false}}
        name="OrderPlaced"
        component={OrderPlaced}
      />
    </BaseStack.Navigator>
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

export default BaseStackNavigator;
