import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Log_in() {
    const router=useRouter();
  return (
    <View>
     <TouchableOpacity onPress={()=>router.push('/(tabs)/Message')}>
        <Text>go</Text>
     </TouchableOpacity>
    </View>
  )
}

