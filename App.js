import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./src/routes/drawer";
import { theme } from "./src/core/theme";

export default function App() {
  return (
    <NavigationContainer  theme={theme}>
      <Screen />
    </NavigationContainer >
  );
}


