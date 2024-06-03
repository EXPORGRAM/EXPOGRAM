import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../../Utils/Data";
import { Image } from "react-native";
import UserPost from "../Shared/UserPost";
import { LinearGradient } from "expo-linear-gradient";
import OthersPost from "./OthersPost";
import StoriesSkeleton from "./StoriesSkeleton";

export default function Stories({user}) {
  return (
    <View className="mb-3">
      <ScrollView horizontal className="pl-4" showsHorizontalScrollIndicator={false}>
        <UserPost image={user.profile_picture} />
        {USERS.map((item, index ) => (
        <OthersPost key={index} image={item.image} name={item.user} />
        ))}
        {/* <StoriesSkeleton /> */}
      </ScrollView>
    </View>
  );
}

