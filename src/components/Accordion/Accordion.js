import React, { useState, useRef, useContext } from "react";
import { View, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import themeContext from "../../config/themeContext";

const Accordion = ({ header, headeStyle, contentStyle, children, content }) => {
  const theme = useContext(themeContext);
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={{ ...headeStyle }}>
          {header()}
          <Animated.View
            style={{ marginRight: 10, transform: [{ rotateZ: arrowAngle }] }}
          >
            <Ionicons
              name="chevron-down"
              color={theme.label}
              size={23}
              // style={{ opacity: 0.5 }}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={{ height: bodyHeight, overflow: "hidden" }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            width: "100%",
            backgroundColor: theme.card,
            ...contentStyle,
          }}
          onLayout={(event) =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }
        >
          {content(toggleListItem)}
        </View>
      </Animated.View>
    </>
  );
};
export default Accordion;
