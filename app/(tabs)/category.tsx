import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"; // Import MaterialCommunityIcons icon library

export default function CategoryComponent() {
  const onPress = () => {
    // Define onPress behavior here
  };

  const iconName = "space-dashboard"; // Example iconName
  const categoryName = "dashbooard"; // Example categoryName

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.categoryContainer}>
        <MaterialIcons name="space-dashboard" size={28} color={"black"} />
        <Text style={styles.categoryText}>{categoryName}</Text>
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
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
  },
  categoryText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});
