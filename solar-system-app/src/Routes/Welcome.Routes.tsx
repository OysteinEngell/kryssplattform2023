import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeRoutes from ".";
import Welcome from "../pages/Welcome";
import { Button, Text, View } from "react-native";
const { Navigator, Screen } = createStackNavigator();


const WelcomeRoutes: React.FC = () => {
  const noHeader = { headerShown: false };
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Welcome" component={Welcome} options={noHeader}/>
        <Screen name="HomeRoutes" component={HomeRoutes} />
      </Navigator>
    </NavigationContainer>
  );
};

export default WelcomeRoutes;
