import {
  View,
  Text,
  Switch,
  StyleSheet,
  Platform,
  //   ActionSheetIOS,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useContext } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";

export default function SettingsScreen() {
  const { showActionSheetWithOptions } = useActionSheet();
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const [systemMode, setSystemMode] = useState(false);
  const [result, setResult] = useState("😁");

  const showActionSheet = () => {
    showActionSheetWithOptions(
      {
        options: ["Generate number", "Reset", "Cancel"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 2,
        // userInterfaceStyle: "dark",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult("🔮");
        }
      }
    );
  };

  // const RadioButton = () => {
  //   return
  // }
  return (
    <ScrollView style={[styles.container]}>
      <View style={[styles.themeSettings]}>
        <View style={[styles.headerSettings]}>
          <Text style={[styles.headerSettingsText, { color: theme.color }]}>
            APPEARNCE
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
              value={systemMode}
              onValueChange={(value) => {
                setSystemMode(value);
                EventRegister.emit("useSystemTheme", value);
              }}
            />
          </View>

          {systemMode == false && (
            <View style={[styles.item]}>
              <View style={[styles.itemFlex]}>
                <View style={[styles.itemIcon]}>
                  <Ionicons name="moon-outline" color={theme.color} size={23} />
                </View>
                <Text style={[styles.itemText, { color: theme.color }]}>
                  Dark Mode
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
          )}

          {/* TODO: add more colors to Dark and Light Theme */}

          <TouchableOpacity onPress={showActionSheet} style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="sunny-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Light Theme
              </Text>
            </View>

            <View style={[styles.itemIcon]}>
              <Ionicons name="chevron-down" color={theme.color} size={23} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={showActionSheet} style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="moon-outline" color={theme.color} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Dark Theme
              </Text>
            </View>
            <View style={[styles.itemIcon]}>
              <Ionicons name="chevron-down" color={theme.color} size={23} />
            </View>
          </TouchableOpacity>
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
    </ScrollView>
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
    marginLeft: 10,
  },
});
