// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtoh9IApT2Yc6uyLFIG6RIAPbiy5tUEpA",
  authDomain: "rentoapp-68f18.firebaseapp.com",
  projectId: "rentoapp-68f18",
  storageBucket: "rentoapp-68f18.appspot.com",
  messagingSenderId: "299078536839",
  appId: "1:299078536839:web:0e8595db2ab1fd2611b222",
  measurementId: "G-PRS2B4C555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);
// export const auth = getAuth(app,{
//   persistence: getReactNativePersistence(AsyncStorage)

// });