import React, { useContext } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import themeContext from "../config/themeContext";

export default ProfileScreen = (props) => {
  const theme = useContext(themeContext);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <View
        style={[
          styles.shadowProp,
          {
            width: "100%",
            height: 300,
            backgroundColor: "#ED5B92",
            marginBottom: 10,
            borderRadius: 10,
          },
        ]}
      />
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate("DetailsScreen")}
      />
      <Button
        title="Go to Settings"
        onPress={() => props.navigation.navigate("SettingsScreen2")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
  },
});
