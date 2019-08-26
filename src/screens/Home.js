import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { TextContent, TextTitle } from "../components/Styles";
import Animals from "../components/Animals";

const animalsList = [
  { id: 1, path: require("../../assets/images/hippo.jpeg") },
  { id: 2, path: require("../../assets/images/lion.jpeg") },
  { id: 3, path: require("../../assets/images/tiger.jpeg") },
  { id: 4, path: require("../../assets/images/zebra.jpeg") }
];

// console.log(animals);
const Home = () => {
  const [animals, setAnimals] = useState(animalsList);
  //   setAnimals(animalsList);
  console.log("Animals:", animals);
  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        { alignItems: "center" },
        { justifyContent: "center" }
      ]}
    >
      <View
        style={[
          { height: 80 },
          { backgroundColor: "red" },
          { flexDirection: "row" },
          { alignItems: "center" },
          { justifyContent: "center" },
          { shadowOffset: { width: 5, height: 4 } },
          { shadowColor: "red" },
          { shadowOpacity: 0.4 }
        ]}
      >
        <TextTitle
          style={[
            { fontSize: 35 },
            { color: "white" },
            { shadowOffset: { width: 3, height: 1 } },
            { shadowColor: "white" },
            { shadowOpacity: 0.5 }
          ]}
        >
          Home
        </TextTitle>
        <Icon
          style={[{ position: "absolute" }, { right: 10 }]}
          name="home"
          size={40}
          color="white"
        />
      </View>

      <View style={[styles.container]}>
        <View style={{ height: 100 }}>
          <TextContent>
            Deserunt ea aliqua est qui ut officia est proident ut elit nulla
            sint adipisicing. Laborum do ex ad ut laboris.
          </TextContent>
        </View>

        <View style={{ height: 100, marginBottom: 15 }}>
          <ScrollView horizontal={true}>
            {animals.map((animal, i) => (
              <Animals key={i} imgSrc={animal.path} />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
