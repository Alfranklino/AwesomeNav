import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import * as Font from "expo-font";
import { TextContent, TextTitle } from "./src/components/Styles";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./src/screens/Home";
import SettingsScreen from "./src/screens/Settings";
import LikeScreen from "./src/screens/Like";
import ProfileScreen from "./src/screens/Profile";

const botTabNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "HOME",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "SETTINGS",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="settings" color={tintColor} size={24} />
        )
      }
    },
    Like: {
      screen: LikeScreen,
      navigationOptions: {
        tabBarLabel: "LIKE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5
      }
    }
  }
);

const AppContainer = createAppContainer(botTabNav);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
