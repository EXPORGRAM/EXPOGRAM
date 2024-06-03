import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome,  MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Header() {
  return (
    <View className="justify-between items-center flex-row mx-5 mb-2">
        <TouchableOpacity>
            <Image source={require('../../../assets/images/header-logo.png')} className="w-[170px] h-[60px] " resizeMode='contain' />
        </TouchableOpacity>
        <View className="flex-row items-center gap-4">
            <TouchableOpacity >
                <FontAwesome name='heart-o' size={24} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity >
                <View className="bg-red-500 absolute pb-[2px] left-3 bottom-4 w-6  items-center justify-center z-50 rounded-3xl">
                    <Text className="text-white text-xs">11</Text>
                </View>
                <Image source={require('../../../assets/images/messenger-white.png')} className="w-[30px] h-[30px] " resizeMode='contain' />
            </TouchableOpacity>
        </View>
    </View>
  )
}