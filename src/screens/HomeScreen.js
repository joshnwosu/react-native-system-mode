import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { useScrollToTop } from "@react-navigation/native";
import themeContext from "../config/themeContext";

import { SwipeListView } from "react-native-swipe-list-view";

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
    title: "Sixth Item",
    color: "green",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Seventh Item",
    color: "magenta",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    color: "brown",
  },
];

const Item = ({ item, navigation, theme, index }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      navigation.navigate("ColorScreen", { bgColor: item.color });
    }}
    style={[
      styles.item,
      {
        backgroundColor: theme.card,
        marginBottom: index == DATA.length - 1 && 2,
      },
    ]}
  >
    <Text style={[styles.title, { color: item.color }]}>{item.color}</Text>
  </TouchableOpacity>
);

export default HomeScreen = ({ navigation }) => {
  const ref = React.useRef(null);
  const theme = useContext(themeContext);

  useScrollToTop(
    React.useRef({
      scrollToTop: () => ref.current?.scrollToOffset({ offset: -140 }),
    })
  );

  const renderItem = ({ item, index }) => (
    <Item item={item} index={index} navigation={navigation} theme={theme} />
  );
  return (
    // <FlatList
    //   ref={ref}
    //   data={DATA}
    //   contentInsetAdjustmentBehavior="automatic"
    //   renderItem={renderItem}
    //   keyExtractor={(_, index) => index.toString()}
    //   scrollToOverflowEnabled={true}
    // />

    <SafeAreaView style={{ flex: 1 }}>
      <SwipeListView
        // ref={ref}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        renderHiddenItem={(data, rowMap) => (
          <View
            style={[
              styles.rowBack,
              // { backgroundColor: theme.background, color: theme.color },
              { backgroundColor: data?.item?.color, color: theme.color },
            ]}
          >
            <Text style={{ color: theme.color }}>Left</Text>
            <Text style={{ color: theme.color }}>Right</Text>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
        // disableRightSwipe={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 30,
    height: 80,
    width: "100%",
    color: "#fff",
    marginTop: 1,
    // alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  rowBack: {
    width: "100%",
    height: 80,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 1,
  },
});
