import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Text, TouchableOpacity } from "react-native";
import SettingsScreen from "../screens/SettingsScreen";
const Stack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: Platform.OS == "ios" ? true : false,
        // headerBlurEffect: "dark",
        // headerLargeStyle: {
        //   // backgroundColor: "#F8F7F8",
        // },
        // headerStyle: {
        //   backgroundColor: Platform.OS == "android" && "#F8F7F8",
        // },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="SettingsSCreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
          // headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
}
