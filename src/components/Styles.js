// This file is so important. It can be customized in such way that,
// i can define a separate file for Texts and their styles,
// an other one for images...
// I can also define completes components (Layouts) <ScrollView> <View> </View> </ScrollView>

import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

/* ======== TEXTs ======== */
export const TextContent = props => {
  const font = "s_reg";
  const style = [props.style || [{ fontSize: 13 }]];
  const allProps = Object.assign(
    {},
    props,
    { fontFamily: font },
    { style: style }
  );
  return <Theme {...allProps}>{props.children}</Theme>;
};

export const TextTitle = props => {
  const font = "s_bold";
  const style = [props.style || [{ fontSize: 20 }, { color: "red" }]];
  const allProps = Object.assign(
    {},
    props,
    { fontFamily: font },
    { style: style }
  );
  return <Theme {...allProps}>{props.children}</Theme>;
};

/* ======== STYLES ======== */

const Theme = props => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Only one Font.loadAsync per font.
  //   For this part, Object.Assign can also work to apply an array or styles.
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
    <View
      style={[
        { flex: 1 },
        { justifyContent: "center" },
        { alignItems: "center" }
      ]}
    >
      {fontsLoaded ? (
        <Text {...allProps}>{props.children}</Text>
      ) : (
        <Text>Font not loaded Properly.</Text>
      )}
    </View>
  );
};
