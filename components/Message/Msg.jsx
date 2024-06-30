import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { db } from './../../Configs/FireBaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function Msg() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const handleChat = (user) => {
    router.push({
      pathname: '/Chat/Chatting',
      params: { id: user.id, data: { userId: user.id, username: user.username } },
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleChat(item)}>
      <View style={styles.userInfo}>
        <Image source={require('./../../assets/images/user-1.png')} style={styles.userImg} />
        <View style={styles.textSection}>
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>{item.username}</Text>
            <Text style={styles.postTime}>Online</Text>
          </View>
          <Text style={styles.messageText}>Tap to chat</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  textSection: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff1493',
  },
  postTime: {
    fontSize: 12,
    color: '#ff1493',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
});
