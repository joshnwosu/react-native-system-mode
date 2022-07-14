import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import themeContext from "../config/themeContext";

import ListRow from "../../ListRow-start";
import TutorialService from "../services/tutorials";

export default function NotificationScreen() {
  const theme = useContext(themeContext);
  const [people, setPeople] = useState([]);

  const handleAdd = async () => {
    try {
      const res = await fetch("http://randomuser.me/api");
      const result = await res.json();
      // this.setState({
      //   people: [...this.state.people, result.results[0]],
      // });

      setPeople([...people, result.results[0]]);
      console.log("Result: ", result);
    } catch (err) {
      // alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    }
  };

  const handleRemove = (index) => {
    const start = people.slice(0, index);
    const end = people.slice(index + 1);
    setPeople(start.concat(end));
  };

  return (
    // <View style={[styles.container]}>
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 0 }}
        data={people}
        renderItem={({ item, index }) => (
          <ListRow
            {...item}
            index={index}
            onRemove={() => handleRemove(index)}
          />
        )}
        keyExtractor={(item) => item.login.username}
        // ListHeaderComponent={() => (
        //   <Button onPress={handleAdd} title="Add Person" />
        // )}
        ListFooterComponent={() => (
          <Button onPress={handleAdd} title="Add Person" />
        )}
      />
    </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
