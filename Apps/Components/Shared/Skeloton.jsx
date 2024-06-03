import { View, Text } from 'react-native'
import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader/native'

export default function Skeloton() {
  return (
    <View className="h-[250px] bg-gray-400 shadow-md rounded-lg overflow-hidden">
        <ContentLoader height='400px' width='100%' viewBox='0 30 380 56' backgroundColor={'rgb(209 213 219)'}>
            <Rect x='0' y='0' rx={5} ry={5} width={400} height={300}  />
        </ContentLoader>
    </View>
  )
}