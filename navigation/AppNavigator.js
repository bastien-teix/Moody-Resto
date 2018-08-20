import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from './../screens/auth/LoginScreen';
import LogoutScreen from './../screens/auth/LogoutScreen';
import SignUpScreen from './../screens/auth/SignUpScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';


export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: LoginScreen,
  Logout: LogoutScreen,
  SignUp: SignUpScreen,
  ForgotPassword: ForgotPasswordScreen,
  Main: MainTabNavigator,
});