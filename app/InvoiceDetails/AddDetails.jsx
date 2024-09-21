import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { db } from '../../../Rento/Configs/FireBaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const AddDetails = () => {
  const [invoices, setInvoices] = useState([]);
  const router=useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'invoices'));
      const invoicesData = [];
      querySnapshot.forEach((doc) => {
        invoicesData.push({ id: doc.id, ...doc.data() });
      });
      setInvoices(invoicesData);
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
       <TouchableOpacity onPress={()=>router.back()} style={{marginLeft:'5%'}}>
        <Ionicons name="arrow-back-circle" size={30} color="#ff1493" />
        </TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.title}>Invoices</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.columnHeader}>Tenant</Text>
          <Text style={styles.columnHeader}>Amount</Text>
          <Text style={styles.columnHeader}>Date</Text>
          <Text style={styles.columnHeader}>Status</Text>
        </View>
        {invoices.map((invoice) => (
          <View key={invoice.id} style={styles.tableRow}>
            <Text style={styles.column}>{invoice.tenant}</Text>
            <Text style={styles.column}>{invoice.amount}</Text>
            <Text style={styles.column}>{invoice.date}</Text>
            <Text style={styles.column}>{invoice.status}</Text>
          </View>
        ))}
      </View>
    </View>
    {/* </View> */}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.PRIMARY,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'white',
  },
  tableHeader: {
    backgroundColor: Colors.PRIMARY,
  },
  columnHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  column: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
});



export default AddDetails;
