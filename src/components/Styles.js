// This file is so important. It can be customized in such way that,
// i can define a separate file for Texts and their styles,
// an other one for images...
// I can also define completes components (Layouts) <ScrollView> <View> </View> </ScrollView>

import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

/* ======== TEXTs ======== */
export const TextContent = props => {
  return (
    <Styles fontFamily="s_reg" style={{ fontSize: 13 }}>
      {props.children}
    </Styles>
  );
};

export const TextTitle = props => {
  return (
    <Styles fontFamily="s_bold" style={[{ fontSize: 20 }, { color: "red" }]}>
      {props.children}
    </Styles>
  );
};

/* ======== STYLES ======== */

const Styles = props => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Only one Font.loadAsync per font.
  async function loadFonts() {
    await Font.loadAsync({
      "Syncopate-Bold": require("../../assets/fonts/Syncopate/Syncopate-Bold.ttf")
    });

    await Font.loadAsync({
      "Syncopate-Regular": require("../../assets/fonts/Syncopate/Syncopate-Regular.ttf")
    });
    setFontsLoaded(true);
  }

  loadFonts();

  function setFontFamily(aFontFamily) {
    switch (aFontFamily) {
      case "s_reg":
        return "Syncopate-Regular";
        break;
      case "s_bold":
        return "Syncopate-Bold";
        break;
      default:
        return "Syncopate-Regular";
    }
  }

  const font = setFontFamily(props.fontFamily ? props.fontFamily : "normal"); //The Font Family prop here is mine (of Course.)
  const style = [{ fontFamily: font }, props.style || {}];
  const allProps = Object.assign({}, props, { style: style });

  return (
    <View>
      {fontsLoaded ? (
        <Text {...allProps}>{props.children}</Text>
      ) : (
        <Text>Font not loaded Properly.</Text>
      )}
    </View>
  );
};
