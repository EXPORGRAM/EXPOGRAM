import { View, Text, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native'
import React, { useCallback, useState } from 'react'
import { COLORS } from '../../Utils/Constants'
import Header from '../Components/Home/Header'
import Stories from '../Components/Home/Stories'
import Post from '../Components/Home/Post'
import { POST } from '../../Utils/Data'
import { useCurrentUser } from '../../Hooks/useCurrentUser'
import { RefreshControl } from 'react-native'
import { useUserContext } from '../../Context/UserContext'

export default function HomeScreen() {
  const { refetch } = useCurrentUser()
  const { currentUser } = useUserContext();
  console.log(Platform.OS)
  // console.log('home:',currentUser)

  const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(()=>{
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    },[])

  return (
    <ScrollView style={{paddingTop: StatusBar.currentHeight || 30,backgroundColor: COLORS.black}} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} animated />
      <Header />
      <Stories user={currentUser} />
      <ScrollView className='pb-32'>
        {
            POST.map((post, index)=>(
                <Post post={post} key={index} />
            ))
        }
      </ScrollView>
    </ScrollView>
  )
}