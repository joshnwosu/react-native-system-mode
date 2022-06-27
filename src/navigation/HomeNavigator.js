import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Text, TouchableOpacity } from "react-native";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ColorScreen from "../screens/ColorScreen";
const Stack = createNativeStackNavigator();

export default function HomeNavigator(props, { navigation, route }) {
  useEffect(() => {
    console.log("Navigation pp: ", props);
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBlurEffect: "prominent",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placeholder: "Github search",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("This is a button!")}>
              <Ionicons name="add-circle-outline" color="blue" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ColorScreen"
        component={ColorScreen}
        options={{
          title: "Color",
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
}
