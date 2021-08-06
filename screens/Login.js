import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import GoogleSignInBtn from '../components/GoogleSignInBtn';

import auth from '@react-native-firebase/auth';


const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const loginWithEmail = () => {
        try {
            auth()
                .createUserWithEmailAndPassword(username, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    navigation.navigate('Home');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    // console.error(error);
                });

        } catch (error) {
            console.log("error", error);
        }



    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputBox}>
                    <TextInput
                        placeholder="Email / Phone"
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <Button icon="user" title="Hit">
                    </Button>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                    />
                    <Button icon="lock" title="Hit">
                    </Button>
                </View>
            </View>
            <View style={[styles.loginBtn, { backgroundColor: '#fc9003' }, styles.mt_20]}>
                <TouchableOpacity
                    onPress={loginWithEmail}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                        Login
                    </Text>
                </TouchableOpacity>

            </View>
            <View style={[styles.loginBtn, { backgroundColor: '#037bfc', marginTop: 10 }]}>
                <GoogleSignInBtn navigation={navigation} />
            </View>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        marginTop: 50,
    },
    inputBox: {
        height: 60,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 16,
    },
    loginBtn: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 35,
        marginHorizontal: 10,
    },
    mt_20: {
        marginTop: 40
    }

})


export default Login;