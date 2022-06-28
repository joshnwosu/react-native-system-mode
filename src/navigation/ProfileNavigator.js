import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Text, TouchableOpacity } from "react-native";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: Platform.OS == "ios" ? true : false,
        headerBlurEffect: "prominent",
        headerLargeStyle: {
          backgroundColor: "#F8F7F8",
        },
        headerStyle: {
          backgroundColor: Platform.OS == "android" && "#F8F7F8",
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="ExploreScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          title: "Details",
          // headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
}
