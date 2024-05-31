import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { Image } from 'react-native'
import { MaterialCommunityIcons,Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient'
import { SIZES } from '../../../Utils/Constants';
import useLikeAnimation from '../../../Utils/useLikeAnimation';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from "react-native-reanimated";
import { TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

export default function Post({post}) {
  return (
    <View className="mb-8">
        <Divider width={0.7} orientation='vertical' />
        <PostHeader post={post} /> 
        <PostImage post={post} />
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
    </View>
  )
}

const PostHeader = ({post}) =>(
      <View className="flex-row justify-between m-3 items-center">
        <TouchableOpacity
          className="flex-row items-center"
        >
            <LinearGradient
              start={[0.9, 0.45]}
              end={[0.07, 1.03]}
              colors={["#ff00ff", "#ff4400", "#ffff00"]}
              style={styles.rainbowBorder}
            >
              <Image
                source={post.pic}
                style={styles.headerImageWithRainbow}
              />
            </LinearGradient>
          <Text style={styles.headerText}>{post.user.toLowerCase()}</Text>
        </TouchableOpacity>
          
          <TouchableOpacity >
            <Entypo
              name="dots-three-vertical"
              size={15}
              color={"#fff"}
              style={styles.headerDots}
            />
          </TouchableOpacity>
      </View>
)

const PostImage = ({ post }) => {
    const { handleDoubleTap, animatedStyles } = useLikeAnimation();
  
    return (
      <GestureDetector gesture={handleDoubleTap}>
        <View>
          <Image source={post.imageUrl} style={styles.postImage} />
          <Animated.View style={[styles.likeContainer, animatedStyles]}>
            <Ionicons name="heart" size={110} color="#f33" />
          </Animated.View>
        </View>
      </GestureDetector>
    );
  };

const PostFooter =()=>(
    <View className="flex-row justify-between items-center m-3">
      <View className="flex-row items-center gap-4">
        <TouchableOpacity>
          
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={27}
              color={"#fff"}
              style={styles.heartIcon}
            />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-outline"
            size={27}
            color={"#fff"}
            style={styles.chatIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="send"
            size={24}
            color={"#fff"}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
          <Feather
            name="bookmark"
            size={24}
            color={"#fff"}
            style={styles.bookmarkIcon}
          />
      </TouchableOpacity>
    </View>
)

const Likes = ({post}) =>(
    <TouchableOpacity>
        <Text className="text-white mx-3 font-bold">{post.likes.toLocaleString('en')} {post.likes>1?' Likes': ' Like'}</Text>
    </TouchableOpacity>
)

const Caption = ({ post }) => {
    const [showLongCaption, setShowLongCaption] = useState(false);
  
    return (
      <View className="flex-row mt-1 mb-3 mx-3">
        {post.caption.length <= 0 ? null : post.caption.length < 120 ? (
          <Text className="text-white font-bold">
            {post.user.toLowerCase() + " "}
            <Text className="ml-1 font-normal">{post.caption}</Text>
          </Text>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => setShowLongCaption(!showLongCaption)}
          >
            <Text className="text-white font-bold">
              {post.user.toLowerCase() + " "}
  
              {showLongCaption ? (
                <Text className="ml-1 font-normal">{post.caption}</Text>
              ) : (
                <Text className="ml-1 font-normal">
                  {post.caption.slice(0, 100)}
                  <Text className=" text-gray-400"> ...more</Text>
                </Text>
              )}
            </Text>
          </TouchableWithoutFeedback>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
    headerImageWithRainbow: {
      height: 36.5,
      width: 36.5,
      resizeMode: "cover",
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "#000",
    },
    rainbowBorder: {
      height: 39,
      width: 39,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 15,
      marginLeft: 10,
      marginBottom: Platform.OS === "android" ? 4 : 1,
    },
    headerDots: {
      transform: [{ scaleX: 1.1 }],
      marginRight: 6,
    },
    postImage: {
        height: SIZES.Width * 1.1,
        width: SIZES.Width,
        resizeMode: "cover",
      },
      likeContainer: {
        position: "absolute",
        top: SIZES.Width * 0.35,
        left: SIZES.Width * 0.35,
        opacity: 0,
      },
      heartIcon: {
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
      },
      sendIcon: {
        transform: [{ rotate: "20deg" }, { scaleX: 0.95 }, { scaleY: 1.05 }],
        marginTop: -2,
      },
      chatIcon: {
        transform: [{ scaleX: -1 }],
      },
      bookmarkIcon: {
        transform: [{ scaleX: 1.15 }, { scaleY: 1.1 }],
      },
      headerIcons: {
        marginRight: 15,
      }
  });