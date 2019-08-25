import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

const Styles = props => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync(
      {
        "Syncopate-Bold": require("./assets/fonts/Syncopate/Syncopate-Bold.ttf")
      },
      {
        "Syncopate-Regular": require("./assets/fonts/Syncopate/Syncopate-Regular.ttf")
      },
      {},
      {}
    );
    setFontsLoaded(true);
  }

  return (
    <View>
      {fontsLoaded ? (
        <Text style={{ fontFamily: "Syncopathe-Bold" }}>Voila</Text>
      ) : (
        <Text>Hum</Text>
      )}
    </View>
  );
};

export default Styles;
