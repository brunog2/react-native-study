/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import PasswordRecovery from './src/screens/PasswordRecovery/PasswordRecovery';
import RecoveryNote from './src/screens/RecoveryNote/RecoveryNote';
import AccountCreated from './src/screens/AccountCreated/AccountCreated';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Tasks"
          children={() => (<Text>Your tasks here</Text>)}
        />

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="Password Recovery"
          component={PasswordRecovery}
        />

        <Stack.Screen
          name="Recovery Note"
          component={RecoveryNote}
        />

        <Stack.Screen
          name="Account Created"
          component={AccountCreated}
        />
      </ Stack.Navigator >
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
});

export default App;
