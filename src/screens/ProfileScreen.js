import React from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
      {["one", "two", "three"].map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            // onPress={() => props?.navigation.navigate("DetailsScreen")}
            onPress={() => console.log(props)}
            style={{
              width: "100%",
              height: 200,
              backgroundColor: props?.route?.params?.bgColor || "white",
              marginBottom: 10,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
