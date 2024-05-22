import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryBtn from "@/components/CategoryBtn";
import Listing from "@/components/Listing";
import listingdata from "@/data/destinations.json";
import groupData from "@/data/groups.json";

import GroupListing from "@/components/GroupListing";

export default function index() {
  const headerHeight = useHeaderHeight();

  const [category, setCategory] = useState("All");
  const onCategoryChanged = (category: string) => {
    console.log("category ", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
                }}
                style={{ width: 50, height: 45, borderRadius: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 15,
                shadowColor: "#171717",
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 0.1,
                shadowRadius: 15,
              }}
            >
              <Ionicons name="notifications" size={25} color={"black"} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingtxt}>Explore the beautifull world!!</Text>
          <View style={styles.searchWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={20}
                style={{ marginRight: 5, marginTop: 2 }}
                color={"black"}
              />
              <TextInput placeholder="Search..." />
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={"white"} />
            </TouchableOpacity>
          </View>
          <CategoryBtn onCategoryChanged={onCategoryChanged} />

          <Listing listings={listingdata} category={category} />

          <GroupListing listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingtxt: {
    fontSize: 28,
    fontWeight: "800",
    color: "black",
    marginTop: 10,
  },
  searchWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});
