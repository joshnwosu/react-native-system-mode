import { View, Text } from "react-native";
import React from "react";

export default function Home({ themeTextStyle, colorScheme, styles }) {
  return (
    <View>
      <Text style={[styles.text, themeTextStyle]}>
        Color scheme: {colorScheme}
      </Text>
    </View>
  );
}
