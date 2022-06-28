import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { Appearance } from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import BottomNavigator from "./src/navigation/BottomNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ED5B92",
    background: "#F8F7F8",
  },
};

export default function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  });

  useEffect(() => {
    console.log("Theme: ", theme);
  }, [theme]);

  return (
    <>
      <NavigationContainer>
        <BottomNavigator theme={theme} />
      </NavigationContainer>
    </>
  );
}
