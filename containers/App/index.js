import React from "react";
import LoginScreen from "../../screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();


const App = () => {

return (
        <NavigationContainer>
        <Navigator initialRouteName={"Login"}>
          <Screen name="Login" component={LoginScreen} />
        </Navigator>
      </NavigationContainer>
      );
   
};

export default App;
