import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadScreen} from '../screens';
import OrderPlaced from '../screens/orderDone/OrderPlaced';
import LoginStack from './AuthStackNavigator';
import BottomNevigator from './BottomNevigator';
import BaseStackNavigator from './BaseNavigator';
import MyOrders from '../screens/orders/MyOrders';
import NormalPageNevigator from './NormalPageNevigator';
const Root = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Root.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginStack">
      <Root.Screen name="LoadScreen" component={LoadScreen} />
      <Root.Screen name="LoginStack" component={LoginStack} />
      <Root.Screen name="BottomNevigator" component={BottomNevigator} />
      <Root.Screen name="BaseStackNavigator" component={BaseStackNavigator} />
       <Root.Screen name="OrderPlaced" component={OrderPlaced} />
      <Root.Screen name="NormalPageNevigator" component={NormalPageNevigator} />
      <Root.Screen name="MyOrders" component={MyOrders} />
    </Root.Navigator>
  );
};

export default RootNavigator;
