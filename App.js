import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './Apps/Screens/HomeScreen'
import { COLORS } from './Utils/Constants'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1" style={{ backgroundColor: COLORS.black}}>
       <HomeScreen />
    </GestureHandlerRootView>
  )
}