import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import themeContext from "../config/themeContext";

export default function ExploreScreen() {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container]}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
