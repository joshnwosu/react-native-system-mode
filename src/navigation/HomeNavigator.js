import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Platform, Text, TouchableOpacity } from "react-native";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ColorScreen from "../screens/ColorScreen";
const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: Platform.OS == "ios" ? true : false,
        // headerBlurEffect: "dark",
        // headerLargeStyle: {
        //   backgroundColor: "#F8F7F8",
        // },
        // headerStyle: {
        //   backgroundColor: Platform.OS == "android" && "#F8F7F8",
        // },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Search Github",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("This is a button!")}>
              <Ionicons name="add-circle-outline" color="blue" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      {/* <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      > */}
      <Stack.Screen
        name="ColorScreen"
        component={ColorScreen}
        options={({ route }) => ({
          title: route.params.bgColor,
          // headerLargeTitle: true,
          presentation: "modal",
          // headerShown: false,
          // headerStyle: {
          //   backgroundColor: "white",
          // },
        })}
      />
      {/* </Stack.Group> */}
    </Stack.Navigator>
  );
}
