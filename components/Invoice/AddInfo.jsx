import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Fontisto } from '@expo/vector-icons'; // Import necessary icons
import { Colors } from '../../constants/Colors';
import {db} from '../../Configs/FireBaseConfig'
import { Firestore, addDoc, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore"; 
import {  useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';



const AddInfo = () => {
    const router=useRouter();

    const [tenant, setTenant] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    // Basic validation
    if (!amount || isNaN(amount)) {
        alert("Amount is required and must be a number.");
        return;
    }
    if (!date || !isValidDate(date)) {
      alert("Date is required and must be a valid date format.");
        return;
    }
    if (!status || !isValidStatus(status)) {
      alert("Status is required and must be a valid status.");
        return;
    }
    if (!tenant) {
      alert("Tenant is required.");
        return;
    }

    // Proceed with Firestore operations
    try {
        // Adding data
        const docRef = await addDoc(collection(db, "invoices"), {
            amount: amount,
            date: date,
            status: status,
            tenant: tenant
        });
        console.log("Document written with ID: ", docRef.id);
        router.push('/InvoiceDetails/AddDetails'); // Assuming 'router' is correctly defined
    } catch (error) {
        console.error("Error adding document: ", error);
    }

    // Delete example
    // deleteDoc(doc(db, "invoices", 'LA'));

     // for adding own id
    // setDoc(doc(db, "invoices", "invoice1"), {
    //    amount:amount,
    //    date: date,
    //    status:status,
    //    tenant:tenant
    //   }).then(()=>{
    //     console.log("Submitted");
    //   }).catch((error)=>{
    //     console.log(error);
    //   });

      //   //for updating
    // updateDoc(doc(db, "invoices", "LA"), {
    //    amount:amount,
    //    date: date,
    //    status:status,
    //    tenant:tenant
    //   }).then(()=>{
    //     console.log("Submitted");
    //   }).catch((error)=>{
    //     console.log(error);
    //   });
};

// Example validation functions
function isValidDate(date) {
    // Implement your date validation logic here
    return !isNaN(Date.parse(date));
}

function isValidStatus(status) {
    // Implement your status validation logic here
    const validStatuses = ['pending', 'paid', 'unpaid']; // Example valid statuses
    return validStatuses.includes(status.toLowerCase());
}

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle" size={30} color="#ff1493" />
        </TouchableOpacity>
        {/* <Ionicons name="heart-circle-outline" size={30} color="black" /> */}
        <Image
          source={require('./../../assets/images/invoice.jpg')}
          style={{
            width: '100%',
            height: '25%',
            marginTop: '5%',
            borderRadius: 30,
            shadowRadius: 2,
            borderWidth:2,
            borderColor:Colors.PRIMARY

          }}
        />
        
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="account" size={30} color="#ff1493" style={styles.icon} />
          
          <TextInput
            style={styles.input}
            placeholder="Tenant"
            value={tenant}
            onChangeText={(tenant)=>{setTenant(tenant)}}
            
          />
        </View>
        
        <View style={styles.inputContainer}>
          <FontAwesome5 name="money-bill-alt" size={30} color="#ff1493" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={(amount)=>{setAmount(amount)}}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Fontisto name="date" size={30} color="#ff1493" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={date}
            onChangeText={(date)=>{setDate(date)}}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="sticker-check-outline" size={30} color="#ff1493" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Status"
            value={status}
            onChangeText={(status)=>{setStatus(status)}}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        
       
      </View>
      <View style={{height:1000}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 7,
    marginBottom: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor:Colors.GREY,
    borderRadius:10
  },
  submitButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    borderRadius: 20,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  submittedInvoiceContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  submittedInvoiceText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableHeader: {
    backgroundColor: Colors.PRIMARY,
    color: 'white',
    fontWeight: 'bold',
  },
  columnHeader: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddInfo;
