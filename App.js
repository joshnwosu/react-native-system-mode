import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  // Appearance,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import MyStack from "./src/navigation/AppNavigator";
import Home from "./src/screens/Home";

const Appearnce2 = () => {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <>
      <StatusBar style="dark" />
      <MyStack />

      {/* <View style={[styles.container, themeContainerStyle]}>
        <Home
          themeTextStyle={themeTextStyle}
          colorScheme={colorScheme}
          styles={styles}
        />

        <StatusBar />
      </View> */}
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
