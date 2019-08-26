import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { TextContent, TextTitle } from "../components/Styles";

const Like = () => {
  return (
    <View style={styles.container}>
      <TextTitle style={[{ fontSize: 35 }, { color: "red" }]}>Like</TextTitle>
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

export default Like;
