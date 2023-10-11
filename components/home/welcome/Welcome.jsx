import { useState } from "react";
import {
  View, //div
  Text, // p
  TextInput, // input
  TouchableOpacity, // button
  Image, // image
  FlatList, // map for large, easily scrollable lists
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
