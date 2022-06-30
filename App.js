import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

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
  const [darkMode, setDarkMode] = useState(false);
  const [systemMode, setSystemMode] = useState(false);

  const colorScheme = useColorScheme();

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setDarkMode(data);
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
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  const themeHandler = () => {
    if (systemMode) {
      if (colorScheme == "dark") setMode(true);
      else if (colorScheme == "light") setMode(false);
    } else {
      if (darkMode) setMode(true);
      else setMode(false);
    }
  };

  useEffect(() => {
    themeHandler();
  }, [colorScheme, systemMode, darkMode]);

  return (
    <>
      <themeContext.Provider value={mode == true ? theme.dark : theme.light}>
        <StatusBar style={mode == true ? "light" : "dark"} />
        <ActionSheetProvider>
          <NavigationContainer
            theme={mode == true ? CustomDarkTheme : CustomDefaultTheme}
          >
            <AppNavigator />
          </NavigationContainer>
        </ActionSheetProvider>
      </themeContext.Provider>
    </>
  );
};

export default App;
