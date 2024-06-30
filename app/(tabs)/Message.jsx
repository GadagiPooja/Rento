
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Msg from './../../components/Message/Msg';

export default function Message() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/house.png')}
        style={styles.headerImage}
      />
      <Text style={{
        marginLeft:'10%',
        fontSize:20,
        fontWeight:'condensed'
      }}>Tenant Chat Thread</Text>
      <Msg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: '35%',
    marginTop: '5%',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 2,
    borderColor: "#ff1493",
},

  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});
