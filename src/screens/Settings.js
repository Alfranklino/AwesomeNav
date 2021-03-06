import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { TextContent, TextTitle } from "../components/Styles";

const Settings = props => {
  return (
    <View style={styles.container}>
      <TextTitle style={[{ fontSize: 35 }, { color: "red" }]}>
        Settings
      </TextTitle>
      <TextContent>
        Deserunt ea aliqua est qui ut officia est proident ut elit nulla sint
        adipisicing. Laborum do ex ad ut laboris.
      </TextContent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Settings;
