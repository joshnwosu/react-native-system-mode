import { View, Text, Switch, StyleSheet, Platform } from "react-native";
import React, { useState, useContext } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  return (
    <View style={[styles.container]}>
      <View style={[styles.themeSettings]}>
        <View style={[styles.headerSettings]}>
          <Text style={[styles.headerSettingsText, { color: theme.color }]}>
            DARK MODE
          </Text>
        </View>

        <View
          style={[styles.itemContainer, { backgroundColor: theme.background }]}
        >
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="settings-outline"
                  color={theme.color}
                  size={23}
                />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Automatic (follow {Platform.OS == "ios" ? "iOS" : "Android"}{" "}
                setting)
              </Text>
            </View>
            <Switch
              value={mode}
              onValueChange={(value) => {
                setMode(value);
                EventRegister.emit("changeTheme", value);
              }}
            />
          </View>

          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="sunny-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Light Theme
              </Text>
            </View>

            <Switch
              value={mode}
              onValueChange={(value) => {
                setMode(value);
                EventRegister.emit("changeTheme", value);
              }}
            />
          </View>

          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="moon-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Dark Theme
              </Text>
            </View>
            <Switch
              value={mode}
              onValueChange={(value) => {
                setMode(value);
                EventRegister.emit("changeTheme", value);
              }}
            />
          </View>
        </View>
      </View>

      <View style={[styles.themeSettings]}>
        <View style={[styles.headerSettings]}>
          <Text style={[styles.headerSettingsText, { color: theme.color }]}>
            ABOUT
          </Text>
        </View>

        <View
          style={[styles.itemContainer, { backgroundColor: theme.background }]}
        >
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="document-outline"
                  color={theme.color}
                  size={23}
                />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Content policy
              </Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="key-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Privacy policy
              </Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="person-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                User agreement
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.themeSettings]}>
        <View style={[styles.headerSettings]}>
          <Text style={[styles.headerSettingsText, { color: theme.color }]}>
            SUPPORT
          </Text>
        </View>

        <View
          style={[styles.itemContainer, { backgroundColor: theme.background }]}
        >
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="help-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Help center
              </Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="mail-open-outline"
                  color={theme.color}
                  size={23}
                />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Report an issue
              </Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="remove-circle-outline"
                  color={theme.color}
                  size={23}
                />
              </View>
              <Text style={[styles.itemText, { color: "#f04438" }]}>
                Delete account
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
  },
  headerSettings: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerSettingsText: {
    fontWeight: "700",
    fontSize: 12,
    opacity: 0.5,
    textTransform: "uppercase",
  },
  itemContainer: {
    // padding: 1,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    minHeight: 50,
  },
  itemFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "700",
  },
});
