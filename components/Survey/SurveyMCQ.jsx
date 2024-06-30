import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Colors } from './../../constants/Colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';



const questions = [
  {
    id: 1,
    question: "which tenant is creating most noice in apartment ?",
    options: ["Jonh", "Meera", "Bob", "Alice"]
  },
  {
    id: 2,
    question: "Which apartment has the highest number of maintenance requests?",
    options: ["Apartment 1", "Apartment 2", "Apartment 3", "Apartment 4"]
  },
  {
    id: 3,
    question: "Which tenant has the most overdue rent payments?",
    options: ["John Doe", "Jane Smith", "Michael Johnson", "Emily Brown"]
  },
  {
    id: 4,
    question: "Which apartment has the most frequent visitor complaints?",
    options: ["A", "B", "C", "D"]
  },
  {
    id: 5,
    question: "Which tenant has the highest utility consumption?",
    options: ["Alice Thompson", "Robert Wilson", "Sarah Davis", "James Miller"]
  }
];

export default function SurveyMCQ() {
    const router =useRouter();
    
  const [responses, setResponses] = useState({});

  const handleOptionChange = (questionId, option) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: option,
    }));
  };
  const handleSubmit=()=>{
    router.push('/SurveyResult/Result');
}
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle" size={30} color="#ff1493" />
        </TouchableOpacity>
      <Image
        source={require('./../../assets/images/survey.jpg')}
        style={styles.image}
      />
      <Text style={styles.surveyTitle}>Tenant Survey</Text>
      {questions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map((option) => (
            <View key={option} style={styles.optionContainer}>
              <RadioButton
                value={option}
                status={responses[question.id] === option ? 'checked' : 'unchecked'}
                onPress={() => handleOptionChange(question.id, option)}
                color={Colors.PRIMARY}
              />
              <Text style={styles.optionText}>{option}</Text>
            </View>
          ))}
        </View>
      ))}
      <TouchableOpacity style={{
        
      }} onPress={handleSubmit}>
        <Text style={{
             fontSize: 20,
             fontWeight: 'bold',
             textAlign: 'center',
             borderWidth:1,
             borderRadius:15,
             height:'15%',
             color:Colors.LIGHT,
             backgroundColor:Colors.PRIMARY,
             borderColor:Colors.PRIMARY
        }}>submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: '8%',
    borderRadius: 30,
    shadowRadius: 2,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    marginBottom: '8%',
  },
  surveyTitle: {
    fontSize: 20,
    marginBottom: '3%',
    fontWeight: 'bold',
    // fontStyle: 'italic',
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },

  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.PRIMARY,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
