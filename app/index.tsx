import { Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>To picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lighGrey,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
