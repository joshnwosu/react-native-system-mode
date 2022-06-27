import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default ProfileScreen = (props) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Text>Profile Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate("DetailsScreen")}
      />

      <View
        style={[
          styles.shadowProp,
          {
            width: "100%",
            height: 300,
            backgroundColor: "white",
            marginBottom: 10,
            borderRadius: 10,
          },
        ]}
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
