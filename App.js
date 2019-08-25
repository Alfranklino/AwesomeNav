import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
// import * as Font from "expo-font";
import { TextContent, TextTitle } from "./src/components/Styles";

export default function App() {
  return (
    <View style={styles.container}>
      <TextTitle>Awesome Nav Is Here A title</TextTitle>
      <TextContent>
        Awesome Nav Is Here Voluptate aliqua ullamco qui pariatur eu dolore duis
        voluptate. Reprehenderit deserunt adipisicing anim consectetur nisi id
        amet. Labore anim sunt est anim veniam in dolor aliqua commodo qui
        pariatur pariatur. Consequat esse occaecat est consequat sit.
        Exercitation do incididunt amet consequat. Veniam cupidatat esse anim
        sint. Aute consectetur qui labore laborum nulla nisi est veniam anim non
        officia ex reprehenderit. Sit esse sunt deserunt ipsum ipsum irure.
        Cupidatat fugiat in duis exercitation exercitation pariatur quis commodo
        sit ut eu et non. Occaecat magna mollit nostrud do fugiat consectetur
        qui. Sunt dolor aliqua ut qui consequat culpa est consectetur pariatur
        irure ullamco aliquip et sit. Sint ex non esse mollit. Cupidatat
        exercitation duis consequat ut aliquip aliquip amet id. Aliquip eu
        eiusmod anim sunt sunt magna non culpa laborum et adipisicing
        consectetur aliqua. Est mollit ipsum ullamco ex voluptate adipisicing
        adipisicing.
      </TextContent>
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
