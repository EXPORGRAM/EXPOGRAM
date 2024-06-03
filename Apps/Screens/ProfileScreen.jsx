import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ProfileScreen() {

  const Logout =()=>{
    console.log()
  }

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={Logout} className="mx-5 items-center justify-center mt-4 p-4" >
        <Text className="text-center text-[16px] text-[#07f] font-bold">Log Out</Text>
       </TouchableOpacity>
    </View>
  )
}