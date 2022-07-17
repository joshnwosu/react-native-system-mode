import React, { useContext, useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import TodoApp from "../components/TodoApp";
import themeContext from "../config/themeContext";
import TutorialService from "../services/tutorials";

export default ProfileScreen = (props) => {
  const theme = useContext(themeContext);

  return (
    <>
      <TodoApp props={props} />
    </>
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
