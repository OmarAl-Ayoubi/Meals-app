import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";

import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
enableScreens();
const fetchFonts = () => {
  Font.useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [loaded] = Font.useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
