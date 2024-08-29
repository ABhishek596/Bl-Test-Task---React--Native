import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import FevouriteScreen from '../screens/fevouriteScreen/FevouriteScreen';
import NoFevouriteScreen from '../screens/fevouriteScreen/nofevouriteScreen/NoFevouriteScreen';

const WishlistStack = createNativeStackNavigator();

const WishlistNavigator = () => {
  return (
    <WishlistStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="FevouriteScreen">
      <WishlistStack.Screen
        options={{headerShown: false}}
        name="FevouriteScreen"
        component={FevouriteScreen}
      />
      <WishlistStack.Screen
        options={{headerShown: false}}
        name="NoFevouriteScreen"
        component={NoFevouriteScreen}
      />
    </WishlistStack.Navigator>
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

export default WishlistNavigator;
