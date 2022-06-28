import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Appearance,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MyStack from "./src/navigation/AppNavigator";
import BottomNavigator from "./src/navigation/BottomNavigator";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ED5B92",
    background: "#F8F7F8",
  },
};

const Appearnce2 = () => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  });
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={MyTheme}>
        {/* <MyStack /> */}
        <BottomNavigator theme={theme} />

        {/* <View style={[styles.container, themeContainerStyle]}>
        <Home
          themeTextStyle={themeTextStyle}
          colorScheme={colorScheme}
          styles={styles}
        />

        <StatusBar />
      </View> */}
      </NavigationContainer>
    </>
  );
};

export default function App() {
  return <Appearnce2 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
