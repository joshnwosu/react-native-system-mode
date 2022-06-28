import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useScrollToTop } from "@react-navigation/native";

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
    onPress={() => {
      navigation.navigate("ColorScreen", { bgColor: item.color });
    }}
    style={[styles.item, { backgroundColor: item.color }]}
  >
    <Text style={styles.title}>{item.color}</Text>
  </TouchableOpacity>
);

export default HomeScreen = ({ navigation }) => {
  const ref = React.useRef(null);

  // useScrollToTop(ref);

  useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollToOffset({ offset: 100 }),
    })
  );

  const renderItem = ({ item }) => <Item item={item} navigation={navigation} />;
  return (
    <FlatList
      ref={ref}
      data={DATA}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={
        {
          // backgroundColor: "rgba(255,255,255,.7)",
        }
      }
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    // marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 0,
  },
  title: {
    fontSize: 20,
  },
});
