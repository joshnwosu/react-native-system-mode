import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import themeContext from "../config/themeContext";
import { Ionicons } from "@expo/vector-icons";

export default function ExploreScreen() {
  const theme = useContext(themeContext);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(false);
  const [cardWidth, setCardWdith] = useState(0);

  const cardHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, cardWidth],
  });

  const toggleAnimation = () => {
    if (active) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    }
    setActive(!active);
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={toggleAnimation}
        style={{
          // padding: 10,
          position: "absolute",
          right: 0,
          zIndex: 9,
          width: 60,
          height: 60,
          backgroundColor: theme.card,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 60,
          bottom: 50,
          right: 20,
          // borderWidth: 1,
          // borderColor: theme.label,
          elevation: 70,
          shadowProp: {
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 5 },
            shadowOpacity: 0.05,
            shadowRadius: 3,
          },
        }}
      >
        <Ionicons name="add" size={30} color={theme.label} />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.card(theme.background),
          { transform: [{ translateY: cardHeight }] },
        ]}
        onLayout={(event) => setCardWdith(event.nativeEvent.layout.height)}
      >
        <Text style={[styles.cardFont, { color: theme.color }]}>
          Content here!
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: (cardColor) => ({
    width: "100%",
    height: "100%",
    backgroundColor: cardColor,
    padding: 20,
  }),

  cardFont: {
    fontSize: 20,
    fontWeight: "400",
  },
});
