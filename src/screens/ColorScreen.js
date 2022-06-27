import React, { useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default ProfileScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: props?.route?.params?.bgColor,
    });
  }, [props.navigation]);
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
            onPress={() => alert("props")}
            style={[
              styles.shadowProp,
              {
                width: "100%",
                height: 200,
                backgroundColor: "white",
                marginBottom: 20,
                padding: 20,
                borderRadius: 10,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                fontWeight: "bold",
                color: props?.route?.params?.bgColor || "black",
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

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
});
