
import React from "react";
import { Provider } from "react-native-paper";
import Screen from "./src";
import { theme } from "./src/core/theme";

export default function App() {
  return (
    <Provider theme={theme}>
      <Screen />
    </Provider>
  );
}


