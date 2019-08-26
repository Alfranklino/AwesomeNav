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

const Animals = props => {
  return (
    <View
      style={{
        height: 130,
        width: 130,
        flexDirection: "row",
        marginRight: 8
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={props.imgSrc}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover"
          }}
        />
      </View>
    </View>
  );
};

export default Animals;
