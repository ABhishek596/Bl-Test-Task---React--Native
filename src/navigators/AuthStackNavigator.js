import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {WelcomeScreen, WelcomePage, LoginScreen, SignupScreen} from '../screens';
import {StyleSheet} from 'react-native';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        cardShadowEnabled: false,
        headerShown: false,
        animation:'none'
      }}
      initialRouteName="LoginScreen">
      <AuthStack.Screen
        options={{headerShown: false}}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
       <AuthStack.Screen
        options={{headerShown: false}}
        name="WelcomePage"
        component={WelcomePage}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
       <AuthStack.Screen
        options={{headerShown: false}}
        name="SignupScreen"
        component={SignupScreen}
      />
   
      {/* <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Signup"
        component={SignupScreen}
      />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="Sms"
        component={SmsAuthenticationScreen}
      />
      <AuthStack.Screen
        options={{ headerStyle: styles.headerStyle }}
        name="ResetPassword"
        component={ResetPasswordScreen}
      /> */}
    </AuthStack.Navigator>
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

export default AuthStackNavigator;
