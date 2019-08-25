import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Styles from "./src/components/Styles";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadFont() {
    await Font.loadAsync(
      {
        "Syncopate-Bold": require("./assets/fonts/Syncopate/Syncopate-Bold.ttf")
      },
      {
        "Syncopate-Regular": require("./assets/fonts/Syncopate/Syncopate-Regular.ttf")
      }
    );

    setFontLoaded(true);
  }

  loadFont();

  return (
    <View style={styles.container}>
      {fontLoaded ? (
        <Text style={{ fontFamily: "Syncopate-Bold", fontSize: 30 }}>
          AwesomeNav
        </Text>
      ) : (
        <Text>Hum</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
