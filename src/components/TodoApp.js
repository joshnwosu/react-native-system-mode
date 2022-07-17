import React, { useContext, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import themeContext from "../config/themeContext";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../redux/todoSlice";
import { Ionicons } from "@expo/vector-icons";

const TodoApp = ({ todos_list, addTodo, deleteTodo, props }) => {
  const theme = useContext(themeContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    addTodo({ task });
    setTask("");
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingHorizontal: 10, flex: 1 }}
          data={todos_list}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <>
                <View
                  style={[
                    styles.card,
                    styles.shadowProp,
                    { backgroundColor: theme.card },
                  ]}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                      paddingRight: 30,
                    }}
                  >
                    <Ionicons
                      name="ios-file-tray-stacked"
                      color={theme.label}
                      size={30}
                    />
                    <View
                      style={[styles.cardText, { marginLeft: 20, flex: 1 }]}
                    >
                      <Text
                        style={[
                          styles.cardId,
                          {
                            color: theme.color,
                            fontSize: 20,
                            fontWeight: "bold",
                          },
                        ]}
                      >
                        Task#{item.id}
                      </Text>
                      <Text
                        // numberOfLines={2}
                        style={[
                          styles.cardTitle,
                          {
                            color: theme.label,
                            opacity: 0.5,
                            fontSize: 14,
                            marginTop: 5,
                          },
                        ]}
                      >
                        {item.task}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                    <Ionicons name="trash-bin" color={"tomato"} size={20} />
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
          ListHeaderComponent={
            <>
              <View style={[styles.search]}>
                <View style={[styles.searchContent]}>
                  <Text style={[styles.title, { color: theme.label }]}>
                    Add ToDo Here
                  </Text>
                  <TextInput
                    style={[
                      styles.input,
                      styles.shadowProp,
                      {
                        borderColor: theme.label,
                        borderRadius: 5,
                        marginVertical: 10,
                        backgroundColor: theme.card,
                        color: theme.color,
                      },
                    ]}
                    placeholder="Type here"
                    value={task}
                    onChangeText={(task) => {
                      //   console.log("Task: ", task);
                      setTask(task);
                    }}
                  />
                  <TouchableOpacity
                    style={[
                      styles.shadowProp,
                      {
                        backgroundColor: theme.card,
                        color: theme.color,
                        padding: 15,
                        justifyContent: "center",
                        alignItems: "center",
                        width: 200,
                        borderRadius: 10,
                      },
                    ]}
                    onPress={handleAddTodo}
                  >
                    <Text style={{ color: theme.color, fontWeight: "bold" }}>
                      Add Task
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          }
          ListFooterComponent={
            <Button
              title="Go to Details"
              onPress={() => props.navigation.navigate("DetailsScreen")}
            />
          }
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.02,
    shadowRadius: 20,
  },
  search: {
    width: "100%",
    marginVertical: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  searchContent: {
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  cardContent: {},
  input: {
    width: "100%",
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const mapStateToProps = (state, myOwnProps) => {
  return {
    todos_list: state.todos.todos_list,
  };
};

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
