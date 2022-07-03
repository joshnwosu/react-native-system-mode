import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../screens/ExploreScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { StyleSheet, View, Platform } from "react-native";
import { BlurView } from "expo-blur";
import HomeNavigator from "./HomeNavigator";
import NotificationNavigator from "./NotificationNavigator";
import ExploreNavigator from "./ExploreNavigator";
import ProfileNavigator from "./ProfileNavigator";
import DetailsScreen from "../screens/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ColorScreen from "../screens/ColorScreen";
import SettingsNavigator from "./SettingsNavigator";
import { useContext } from "react";
import themeContext from "../config/themeContext";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const theme = useContext(themeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
        tabBarHideOnKeyboard: true,
        // tabBarShowLabel: false,
        // tabBarStyle: {
        //   // height: 100,
        //   position: "absolute",
        //   // backgroundColor: Platform.OS == "ios" ? "#F8F7F850" : "#F8F7F8",
        //   // borderTopColor: Platform.OS == "ios" ? "#F8F7F850" : "#F8F7F8",
        // },
        // tabBarBackground: () => (
        //   <BlurView
        //     tint="dark"
        //     intensity={100}
        //     style={StyleSheet.absoluteFill}
        //   />
        // ),

        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route?.name == "Home") {
            iconName = focused ? "home" : "home";
          } else if (route?.name == "Notifications") {
            iconName = focused ? "bell" : "bell";
          } else if (route?.name == "Explore") {
            iconName = focused ? "telescope" : "telescope";
          } else if (route?.name == "Profile") {
            iconName = focused ? "person" : "person";
          } else if (route?.name == "Settings") {
            iconName = focused ? "gear" : "gear";
          }

          return <Octicons name={iconName} color={color} size={size / 1.2} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Notifications" component={NotificationNavigator} />
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

// const Stack = createNativeStackNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Notifications" component={NotificationScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// const BottomNavigators = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeTabs}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//       <Stack.Screen name="Explore" component={ExploreScreen} />
//       <Stack.Screen name="ColorScreen" component={ColorScreen} />
//     </Stack.Navigator>
//   );
// };

export default AppNavigator;
