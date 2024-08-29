import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Products from '../screens/categoriesScreens/Products';
import ProductDetails from '../screens/categoriesScreens/ProductDetails';
const NormalPageStack = createNativeStackNavigator();

const NormalPageNevigator = () => {
  return (
    <NormalPageStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="CategoriesView">
     
      <NormalPageStack.Screen
        options={{headerShown: false}}
        name="Products"
        component={Products}
      />
    
      <NormalPageStack.Screen
        options={{headerShown: false}}
        name="ProductDetails"
        component={ProductDetails}
      />
    
    </NormalPageStack.Navigator>
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

export default NormalPageNevigator;
