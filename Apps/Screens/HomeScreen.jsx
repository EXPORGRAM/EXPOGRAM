import { View, Text, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../../Utils/Constants'
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'
import Post from '../Components/Home/Post'
import { POST } from '../../Utils/Data'

export default function HomeScreen() {
  console.log(Platform.OS)
  return (
    <ScrollView style={{paddingTop: StatusBar.currentHeight || 30,backgroundColor: COLORS.black}}>
      <Header />
      <Stories />
      <ScrollView>
        {
            POST.map((post, index)=>(
                <Post post={post} key={index} />
            ))
        }
      </ScrollView>
    </ScrollView>
  )
}