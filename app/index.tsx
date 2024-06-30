// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Colors } from './../constants/Colors'; // Adjust the import path as needed
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function Log_in() {
//     const router = useRouter();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleLogin = async () => {
//         setLoading(true);
//         setErrorMessage('');
        
//         try {
//             // Hardcoded credentials for testing
//             // const hardcodedUsername = 'ethan.hunt';
//             const hardcodedUsername = 'e';
//             const hardcodedPassword = '2';
//             // const hardcodedPassword = 'entity!2025';
//             if (!username || !password) {
//                 alert('Both fields are required');
                
//             }

//             if (username === hardcodedUsername && password === hardcodedPassword) {
//                 // Navigate to main app
//                 router.push('/(tabs)/Message');
//             } else {
//                 throw new Error('Invalid username or password');
//             }
//         } catch (error) {

//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Rento</Text>
//             <Text style={styles.subtitle}>All in one App</Text>
            
//             <View style={styles.inputContainer}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#ff1493" style={styles.icon} />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Username"
//                     value={username}
//                     onChangeText={setUsername}
//                     autoCapitalize="none"
//                 />
//             </View>
            
//             <View style={styles.inputContainer}>
//                 <MaterialIcons name="lock-outline" size={24} color="#ff1493" style={styles.icon} />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Password"
//                     value={password}
//                     onChangeText={setPassword}
//                     secureTextEntry
//                 />
//             </View>
            
//             {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            
//             {loading ? (
//                 <ActivityIndicator size="large" color={Colors.PRIMARY} style={styles.loader} />
//             ) : (
//                 <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                     <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 20,
//     },
//     title: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color: '#ff1493',
//     },
//     subtitle: {
//         fontSize: 18,
//         marginBottom: 20,
//         color: '#333',
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '80%',
//         marginBottom: 15,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     input: {
//         flex: 1,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 10,
//         backgroundColor: '#fff',
//     },
//     button: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         alignItems: 'center',
//         borderRadius: 10,
//         marginTop: 20,
//         width: '80%',
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
//     error: {
//         color: 'red',
//         marginTop: 10,
//     },
//     loader: {
//         marginTop: 20,
//     },
// });



import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from './../constants/Colors'; // Adjust the import path as needed
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { db } from './../../MyNewApp/Configs/FireBaseConfig'; // Adjust the import path as needed
import { addDoc, collection } from 'firebase/firestore';

export default function Log_in() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setErrorMessage('');

        try {
            // Adding data
            await addDoc(collection(db, "users"), {
                username,
                password
            });
            router.push('/(tabs)/Message');
        }  catch (error) {
            // setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rento</Text>
            <Text style={styles.subtitle}>All in one App</Text>
            
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="email-outline" size={24} color="#ff1493" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
            </View>
            
            <View style={styles.inputContainer}>
                <MaterialIcons name="lock-outline" size={24} color="#ff1493" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            
            {loading ? (
                <ActivityIndicator size="large" color={Colors.PRIMARY} style={styles.loader} />
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            )}
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
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ff1493',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    loader: {
        marginTop: 20,
    },
});
