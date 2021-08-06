import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '516369630279-hj6tpc0r16mlr20n2du69cp6nthricpd.apps.googleusercontent.com',
});


const GoogleSignInBtn = ({ navigation }) => {
    return (

        <TouchableOpacity
            onPress={() => onGoogleButtonPress().then(() => navigation.navigate("Home"))}
        >
            <Text style={styles.googleLoginBtn}>
                Continue with Google
            </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    googleLoginBtn: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})


const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

export default GoogleSignInBtn;