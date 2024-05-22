import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icon library

export default function SearchComponent() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="#777" />
        <Text style={styles.searchText}>Search</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
  },
  searchText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#777",
  },
});
