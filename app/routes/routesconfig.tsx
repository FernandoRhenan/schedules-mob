import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./routes";

const Stack = createNativeStackNavigator();

const RoutesConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes().map((item, index) => {
          return <Stack.Screen key={index} name={item.name} component={item} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesConfig;
