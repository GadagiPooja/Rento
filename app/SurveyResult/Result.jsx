import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from './../../constants/Colors';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Result() {
  const router=useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle" size={30} color="#ff1493" />
      </TouchableOpacity>
      
      <Text style={styles.text}>Survey Submitted</Text>
      <Fontisto name="smiley" size={100} color="#ff1493" />
      <FontAwesome6 name="gratipay" size={30} color="#ff1493" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textAlign: 'center',
    marginBottom: 20,
  },
});
