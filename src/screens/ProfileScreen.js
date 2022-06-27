import React from "react";
import { Button, ScrollView, Text, View } from "react-native";

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
        onPress={() => props.navigation.navigate("Details")}
      />
      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: props?.route?.params?.bgColor || "white",
          marginBottom: 10,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: props?.route?.params?.bgColor || "white",
          marginBottom: 10,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: props?.route?.params?.bgColor || "white",
          marginBottom: 10,
        }}
      />
    </ScrollView>
  );
};
