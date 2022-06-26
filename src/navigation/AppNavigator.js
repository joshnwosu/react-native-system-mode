import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
// import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    color: "red",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    color: "blue",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    color: "purple",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Fourth Item",
    color: "orange",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Fifth Item",
    color: "yellow",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sixth Item",
    color: "green",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Seventh Item",
    color: "purple",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Eigth Item",
    color: "#444",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Nineth Item",
    color: "magenta",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    color: "brown",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    color: "white",
  },
];

const Item = ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("Profile")}
    style={[styles.item, { backgroundColor: item.color }]}
  >
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <Item item={item} navigation={navigation} />;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />

      <FlatList
        data={DATA}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTranslucent: true,
            headerTransparent: true,
            headerBlurEffect: "prominent",
            headerLargeTitle: true,
            headerBackTitle: "This",
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => alert("This is a button!")}>
            //     <Ionicons
            //       name="information-outline"
            //       color="#000000"
            //       size={24}
            //     />
            //   </TouchableOpacity>
            // ),
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
});
