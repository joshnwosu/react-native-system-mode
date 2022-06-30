import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import themeContext from "../config/themeContext";
import AccordionListItem from "../components/AccordionList/Accordion";

export default function ExploreScreen() {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container]}>
      <AccordionListItem title={"List Item"}>
        <Text>Some body text!</Text>
      </AccordionListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 10,
    justifyContent: "center",
  },
});
