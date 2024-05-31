import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../../Utils/Data";
import { Image } from "react-native";
import UserPost from "../UserPost";
import { LinearGradient } from "expo-linear-gradient";
import OthersPost from "./OthersPost";
import StoriesSkeleton from "./StoriesSkeleton";

export default function Stories() {
  return (
    <View className="mb-3">
      <ScrollView horizontal className="pl-4" showsHorizontalScrollIndicator={false}>
        <UserPost />
        {USERS.map((item, index ) => (
        <OthersPost key={index} image={item.image} name={item.user} />
        ))}
        {/* <StoriesSkeleton /> */}
      </ScrollView>
    </View>
  );
}

