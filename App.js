import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './Apps/Screens/HomeScreen'
import { COLORS } from './Utils/Constants'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomTab from './Apps/Navigations/BottomTab'
import { NavigationContainer } from '@react-navigation/native'
import SignedInStack from './Apps/Navigations/SignedInStack'
import Login from './Apps/Screens/Login'
import SignedOutStack from './Apps/Navigations/SignedOutStack'

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1" style={{ backgroundColor: COLORS.black}}>
      {/* <SignedInStack /> */}
      <SignedOutStack />
    </GestureHandlerRootView>
  )
}