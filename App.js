import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

import { EventRegister } from "react-native-event-listeners";

import themeContext from "./src/config/themeContext";
import theme from "./src/config/theme";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000000",
    background: "#F8F7F8",
    card: "#FFFFFF",
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#FFFFFF",
    // background: "#090909",
    background: "#000000",
    card: "#000000",
  },
};

const App = () => {
  const [mode, setMode] = useState(false);
  const [systemMode, setSystemMode] = useState(Appearance.getColorScheme());
  const colorScheme = useColorScheme();

  Appearance.addChangeListener((scheme) => {
    setSystemMode(scheme);
    console.log("The scheme: ", scheme.colorScheme);
    console.log(colorScheme);
  });

  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  //     console.log("The scheme: ", colorScheme);
  //   });

  //   return () => subscription.remove();
  // }, []);

  // useEffect(() => {
  //   console.log(colorScheme);
  // }, [colorScheme]);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
        console.log("Data: ", data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "useSystemTheme",
      (data) => {
        setSystemMode(data);
        console.log("System Data: ", data);
        console.log("The color scheme: ", colorScheme);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  return (
    <>
      <ActionSheetProvider>
        <themeContext.Provider value={mode == true ? theme.dark : theme.light}>
          <StatusBar style={mode == true ? "light" : "dark"} />
          <NavigationContainer
            theme={mode == true ? CustomDarkTheme : CustomDefaultTheme}
          >
            <AppNavigator />
          </NavigationContainer>
        </themeContext.Provider>
      </ActionSheetProvider>
    </>
  );
};

export default App;
