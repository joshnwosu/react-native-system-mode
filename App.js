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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./src/redux/reducer";

const store = configureStore({
  reducer: rootReducer,
});

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
      primary: theme?.light[accentColor]?.label,
      background: theme?.light[accentColor]?.background,
      card: theme?.light[accentColor]?.card,
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "#EEEEEE",
      // primary: theme.dark[darkAccentColor].label,
      background: theme?.dark[darkAccentColor]?.background,
      card: theme?.dark[darkAccentColor]?.card,
    },
  };

  // useEffect(async () => {
  //   const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //   if (appData == null) {
  //     setIsAppFirstLaunched(true);
  //     AsyncStorage.setItem("isAppFirstLaunched", "false");
  //   } else {
  //     setIsAppFirstLaunched(false);
  //   }
  // });

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      async (data) => {
        setDarkMode(data);
        if (data) await AsyncStorage.setItem("darkMode", "true");
        else await AsyncStorage.setItem("darkMode", "false");
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "useSystemTheme",
      async (data) => {
        setSystemMode(data);
        // store value locally.
        if (data) await AsyncStorage.setItem("systemMode", "true");
        else await AsyncStorage.setItem("systemMode", "false");
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "accentColor",
      async (data) => {
        setAccentColor(data);
        if (data) await AsyncStorage.setItem("accentColor", "true");
        else await AsyncStorage.setItem("accentColor", "false");
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

  const fetchFromLocalStorage = async () => {
    const accentColor = await AsyncStorage.getItem("accentColor");
    const systemMode = await AsyncStorage.getItem("systemMode");
    const darkMode = await AsyncStorage.getItem("darkMode");

    if (accentColor == "true") setAccentColor(true);
    else if (accentColor == "false") setAccentColor(false);

    if (systemMode == "true") setSystemMode(true);
    else if (systemMode == "false") setSystemMode(false);

    if (darkMode == "true") setDarkMode(true);
    else if (darkMode == "false") setDarkMode(false);

    console.log({ accentColor, systemMode, darkMode });
  };

  useEffect(() => {
    themeHandler();
    // fetchFromLocalStorage();
  }, [colorScheme, systemMode, darkMode]);

  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
};

export default App;
