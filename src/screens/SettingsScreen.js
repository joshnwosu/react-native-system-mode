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
import React, { useState, useContext, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import Accordion from "../components/Accordion/Accordion";

export default function SettingsScreen() {
  const { showActionSheetWithOptions } = useActionSheet();
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const [systemMode, setSystemMode] = useState(false);
  const [result, setResult] = useState("😁");

  const showActionSheet = () => {
    showActionSheetWithOptions(
      {
        options: ["Na wa for you o 😣", "Reset", "Cancel"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 2,
        userInterfaceStyle: "automatic",
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

  const lightTheme = ["Default", "Ice", "Fire", "Trees", "Pony"];
  const darkTheme = ["Night", "AMOLED"];

  const [selectedDarkTheme, setSelectedDarkTheme] = useState(darkTheme[0]);
  const [selectedLightTheme, setSelectedLightTheme] = useState(lightTheme[0]);

  return (
    <ScrollView style={[styles.container]}>
      <View style={[styles.themeSettings]}>
        <View
          style={[styles.headerSettings, { backgroundColor: theme.header }]}
        >
          <Text style={[styles.headerSettingsText, { color: theme.label }]}>
            APPEARNCE
          </Text>
        </View>

        <View style={[styles.itemContainer, { backgroundColor: theme.card }]}>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="settings-outline"
                  color={theme.label}
                  size={23}
                />
              </View>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={[styles.itemText, { color: theme.color, flex: 1 }]}
              >
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
                  <Ionicons name="moon-outline" color={theme.label} size={23} />
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

          <Accordion
            headeStyle={styles.item}
            header={() => (
              <View style={[styles.itemFlex]}>
                <View style={[styles.itemIcon]}>
                  <Ionicons
                    name="sunny-outline"
                    color={theme.label}
                    size={23}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[styles.itemText, { color: theme.color }]}>
                    Light theme
                  </Text>
                  <Text
                    style={[
                      styles.itemText,
                      {
                        color: theme.label,
                        fontWeight: "400",
                        fontSize: 14,
                        paddingRight: 10,
                        opacity: 1,
                      },
                    ]}
                  >
                    {selectedLightTheme}
                  </Text>
                </View>
              </View>
            )}
            contentStyle={styles.contentStyle}
            content={(closeAccordion) =>
              lightTheme?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    closeAccordion();
                    setSelectedLightTheme(item);
                    EventRegister.emit("accentColor", item.toLowerCase());
                  }}
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 40,
                    padding: 10,
                  }}
                >
                  <View>
                    <Ionicons
                      name={
                        selectedLightTheme == item
                          ? "radio-button-on-outline"
                          : "radio-button-off-outline"
                      }
                      color={theme.label}
                      size={23}
                      style={{ opacity: 1 }}
                    />
                  </View>
                  <Text
                    style={{
                      color: theme.color,
                      fontSize: 20,
                      fontSize: 15,
                      fontWeight: "400",
                      marginLeft: 10,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))
            }
          />

          <Accordion
            headeStyle={styles.item}
            header={() => (
              <View style={[styles.itemFlex]}>
                <View style={[styles.itemIcon]}>
                  <Ionicons name="moon-outline" color={theme.label} size={23} />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={[styles.itemText, { color: theme.color }]}>
                    Dark theme
                  </Text>
                  <Text
                    style={[
                      styles.itemText,
                      {
                        color: theme.label,
                        fontWeight: "400",
                        fontSize: 14,
                        paddingRight: 10,
                        opacity: 1,
                      },
                    ]}
                  >
                    {selectedDarkTheme}
                  </Text>
                </View>
              </View>
            )}
            contentStyle={styles.contentStyle}
            content={(closeAccordion) =>
              darkTheme?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDarkTheme(item);
                    closeAccordion();
                    EventRegister.emit("darkAccentColor", item.toLowerCase());
                  }}
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 40,
                    padding: 10,
                  }}
                >
                  <View>
                    <Ionicons
                      name={
                        selectedDarkTheme == item
                          ? "radio-button-on-outline"
                          : "radio-button-off-outline"
                      }
                      color={theme.label}
                      size={23}
                      style={{ opacity: 1 }}
                    />
                  </View>
                  <Text
                    style={{
                      color: theme.color,
                      fontSize: 20,
                      fontSize: 15,
                      fontWeight: "400",
                      marginLeft: 10,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))
            }
          />

          {/* <TouchableOpacity onPress={showActionSheet} style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="sunny-outline" color={theme.label} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Light theme
              </Text>
            </View>

            <View style={[styles.itemIcon]}>
              <Ionicons name="chevron-down" color={theme.label} size={23} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={showActionSheet} style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="moon-outline" color={theme.label} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Dark theme
              </Text>
            </View>
            <View style={[styles.itemIcon]}>
              <Ionicons name="chevron-down" color={theme.label} size={23} />
            </View>
          </TouchableOpacity> */}
        </View>
      </View>

      <View style={[styles.themeSettings]}>
        <View
          style={[styles.headerSettings, { backgroundColor: theme.header }]}
        >
          <Text style={[styles.headerSettingsText, { color: theme.label }]}>
            ABOUT
          </Text>
        </View>

        <View style={[styles.itemContainer, { backgroundColor: theme.card }]}>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="document-outline"
                  color={theme.label}
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
                <Ionicons name="key-outline" color={theme.label} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Privacy policy
              </Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons name="person-outline" color={theme.label} size={23} />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                User agreement
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.themeSettings]}>
        <View
          style={[styles.headerSettings, { backgroundColor: theme.header }]}
        >
          <Text style={[styles.headerSettingsText, { color: theme.label }]}>
            SUPPORT
          </Text>
        </View>

        <View style={[styles.itemContainer, { backgroundColor: theme.card }]}>
          <View style={[styles.item]}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="ios-help-circle-outline"
                  color={theme.label}
                  size={23}
                />
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
                  color={theme.label}
                  size={23}
                />
              </View>
              <Text style={[styles.itemText, { color: theme.color }]}>
                Report an issue
              </Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.item]} onPress={showActionSheet}>
            <View style={[styles.itemFlex]}>
              <View style={[styles.itemIcon]}>
                <Ionicons
                  name="remove-circle-outline"
                  color={theme.label}
                  size={23}
                />
              </View>
              <Text style={[styles.itemText, { color: "#f04438" }]}>
                Delete account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
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
    opacity: 1,
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
    flex: 1,
  },
  itemIcon: {
    marginRight: 10,
    opacity: 1,
  },
  itemText: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 10,
  },

  contentStyle: {},
});
