// import { View, Text, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native'
// import React, { useCallback, useState } from 'react'
// import { Image } from 'react-native'

// export default function SearchScreen({navigation}) {

//   const [refreshing, setRefreshing] = useState(false)
//     const onRefresh = useCallback(()=>{
//         setRefreshing(true)
//         setRefreshing(false)
//     },[])

//   const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
//   const { width, height }= Dimensions.get('window')
//   return (
//     <View className='flex-1 bg-black'>
//       <TouchableOpacity className='absolute top-5 left-0 right-0 z-50 bg-[#3d3d3d] m-5 rounded-full p-4 flex flex-row items-center shadow-xl shadow-black'>
//         <Image source={require('../../assets/images/search.png')} className='w-[25px] h-[25px] mr-4' />
//         <Text className='text-gray-400 text-[16px] px-2'>Search</Text>
//       </TouchableOpacity>
//     <ScrollView className='flex-1' refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
//       <View className='flex flex-row flex-wrap pt-32 pb-20'>
//         {
//          arr.map((item, index)=><View key={index} style={{width: width*0.33, height: width*0.33}} className='bg-[#3d3d3d] border border-black' ></View>)
//         }
//       </View>
//     </ScrollView>
//     </View>
//   )
// }

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  View,
  SafeAreaView,
  Keyboard,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useCallback, useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../../Utils/Constants";
import { useUserContext } from "../../Context/UserContext";
import useSlideOnKeyboard from "../../Utils/useSlideOnKeyboard";
import useHeaderScrollAnim from "../../Utils/useHeaderScrollAnim";
import useFadeInOutAnim from "../../Utils/useFadeInOutAnim";
// import DefaultPosts from "../components/search/DefaultPosts";
// import useFindUsers from "../hooks/useFindUsers";
// import Searching from "../components/search/Searching";

const SearchScreen = ({ navigation }) => {
  const { currentUser } = useUserContext();
  const { headerTranslate, headerOpacity, scrollY } = useHeaderScrollAnim(43);
  const [searchKey, setSearchKey] = useState("");
  // const { beginSearch, users, searchResult } = useFindUsers({
  //   currentUser,
  //   searchKey,
  // });

    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(()=>{
        setRefreshing(true)
        setRefreshing(false)
    },[])

  const [focusedBar, setFocusedBar] = useState(false);
  const [inputWidth, setInputWidth] = useState(SIZES.Width / 0.9);
  const [searching, setSearching] = useState(false);
  const { fadeEffect } = useFadeInOutAnim({ focusedBar });

  const { slideAnimation, forceSlideAnimation } = useSlideOnKeyboard(
    SIZES.Width * 0.75,
    SIZES.Width * 0.9
  );

  const handleFocus = () => {
    // beginSearch();
    forceSlideAnimation(true);
    clearTimeout();
    setFocusedBar(true);
    setSearching(true);
    setInputWidth(SIZES.Width * 0.7);
  };

  const handleCancel = () => {
    forceSlideAnimation(false);
    setFocusedBar(false);
    setSearching(false);
    Keyboard.dismiss();
    setInputWidth(SIZES.Width * 0.8);
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const arr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header(80),
          {
            // transform: [{ translateY: headerTranslate }],
          },
        ]}
      >
        <View style={styles.searchBar}>
        <Animated.View style={[{ width: slideAnimation },{ opacity: headerOpacity },]} className=' bg-[#3d3d3d] m-5 rounded-full p-3 flex flex-row items-center shadow-xl shadow-black'>
         <Image source={require('../../assets/images/search.png')} className='w-[25px] h-[25px] mr-4' />
         <TextInput
              value={searchKey}
              onChangeText={setSearchKey}
              maxLength={30}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Search"
              placeholderTextColor={"#999"}
              style={[styles.searchInput, { width: inputWidth }]}
              enterKeyHint="search"
              onFocus={() => handleFocus()}
              className='text-[16px] px-2'
            />
       </Animated.View>
          {focusedBar && (
            <TouchableOpacity onPress={() => handleCancel()}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
      <View style={styles.result}>

        <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View className="flex flex-row flex-wrap pt-28 pb-20">
          {arr.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: SIZES.Width * 0.333, height: SIZES.Width * 0.333 }}
              className="bg-[#3d3d3d] border border-black"
            ></TouchableOpacity>
          ))}
        </View>
        </ScrollView>

        {/* <DefaultPosts navigation={navigation} handleScroll={handleScroll} /> */}

        {searching && (
          <Animated.View
            style={[
              styles.searchingContainer,
              {
                opacity: fadeEffect,
              },
            ]}
          >
            {/* <Searching
              navigation={navigation}
              searchResult={searchKey.length > 0 ? searchResult : users}
              currentUser={currentUser}
            /> */}
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: (ContainerHeight) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 20,
    height: ContainerHeight,
    zIndex: 1,
  }),
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    color: "#fff",
    height: "100%",
  },
  cancelBtn: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  result: {
    flex: 1,
  },
  searchingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
  },
});
