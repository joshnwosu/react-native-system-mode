import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";

export default function SettingsScreen() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  return (
    <View style={[styles.container]}>
      <View>
        <Text style={{ color: theme.color }}>Light/Dark Mode</Text>
        <Switch
          value={mode}
          onValueChange={(value) => {
            setMode(value);
            EventRegister.emit("changeTheme", value);
          }}
        />
      </View>

      <View>
        <Text style={{ color: theme.color }}>Automatic</Text>
        <Switch
          value={mode}
          onValueChange={(value) => {
            setMode(value);
            EventRegister.emit("changeTheme", value);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
