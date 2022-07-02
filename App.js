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

const App = () => {
  const [mode, setMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [systemMode, setSystemMode] = useState(false);
  const [accentColor, setAccentColor] = useState("default");
  const [darkAccentColor, setDarkAccentColor] = useState("default");

  const colorScheme = useColorScheme();

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // primary: "#222222",
      primary: theme.light[accentColor].label,
      background: theme.light[accentColor].background,
      card: theme.light[accentColor].card,
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#EEEEEE",
      // primary: theme.dark[darkAccentColor].label,
      background: theme.dark[darkAccentColor].background,
      card: theme.dark[darkAccentColor].card,
    },
  };

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

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "accentColor",
      (data) => {
        setAccentColor(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "darkAccentColor",
      (data) => {
        setDarkAccentColor(data);
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
      <themeContext.Provider
        value={
          mode == true
            ? theme.dark[darkAccentColor] || theme.dark
            : theme.light[accentColor] || theme.light
        }
      >
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
