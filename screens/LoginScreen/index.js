/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, Text, Button, Alert } from "react-native";
import testProperties from "../../utils/testProperties";

const LoginScreen = () =>   {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello Login Playground</Text>
      <Button
       
onPress={() => Alert.alert('Simple Button pressed')}
  title="Learn More"
  color="#841584"
  {...testProperties("LearnMore")}
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
}

export default LoginScreen;
