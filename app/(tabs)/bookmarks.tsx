import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icon library

export default function BookmarkComponent() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.bookmarkContainer}>
        <FontAwesome name="bookmark" size={24} color="#4CAF50" />
        <Text style={styles.bookmarkText}>Bookmark</Text>
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
  bookmarkContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
  },
  bookmarkText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#4CAF50",
  },
});
