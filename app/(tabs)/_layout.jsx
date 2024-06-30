import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
         headerShown:false,
         tabBarActiveTintColor:Colors.PRIMARY,
         tabBarLabelStyle: {
            fontSize:15
          },
        }}>
             <Tabs.Screen name='Message'
             options={{
                 tabBarLabel:"Message",
                 tabBarIcon:({color})=><MaterialCommunityIcons name="message-processing-outline" size={24} color={color} />
             }}
             />
             <Tabs.Screen name='Invoice'
              options={{
                 tabBarLabel:"Invoice",
                 tabBarIcon:({color})=><FontAwesome6 name="file-invoice" size={24} color={color} />
             }}/>
             <Tabs.Screen name='Survey'
              options={{
                 tabBarLabel:"Survey",
                 tabBarIcon:({color})=><FontAwesome5 name="tasks" size={24} color={color} />
             }}/>
             
        </Tabs>


        // <Tabs>
        //     <Tabs.Screen name='Message'/>
        //     <Tabs.Screen name='Invoice'/>
        //     <Tabs.Screen name='Survey'/>
        // </Tabs>
       )
}