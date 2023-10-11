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
import { icons, images, SIZES } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Ben.</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
            placeholderTextColor="grey"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
