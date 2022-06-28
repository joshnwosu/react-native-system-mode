import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Text, TouchableOpacity } from "react-native";
import NotificationScreen from "../screens/NotificationScreen";
import ExploreScreen from "../screens/ExploreScreen";
const Stack = createNativeStackNavigator();

export default function ExploreNavigator() {
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
        component={ExploreScreen}
        options={({}) => ({
          title: "Explore",
          headerLargeTitle: true,
          headerSearchBarOptions:
            Platform.OS == "ios"
              ? {
                  placeholder: "Github search",
                  headerIconColor: "red",
                }
              : null,
        })}
      />
    </Stack.Navigator>
  );
}
