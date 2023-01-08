import React, { useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Platform, Text, TouchableOpacity } from "react-native";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ColorScreen from "../screens/ColorScreen";
import themeContext from "../config/themeContext";
const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  const theme = useContext(themeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        // headerTransparent: Platform.OS == "ios" ? true : false,
        // headerBlurEffect: theme.theme == "light" ? "light" : "dark",
        // headerLargeStyle: {
        //   backgroundColor: theme.background,
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
          headerShown: false,
          title: "Home",
          headerLargeTitle: true,
          // headerSearchBarOptions: {
          //   placeholder: "Search Github",
          // },
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
          // title: route.params.bgColor,
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
