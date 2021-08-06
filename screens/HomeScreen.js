// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//     return (
//         <View>
//             <Text>This is Home Screen</Text>
//             <TouchableOpacity onPress={() => {
//                 navigation.navigate("DetailsScreen")
//             }}>
//                 <Text>Detail Screen</Text>
//             </TouchableOpacity>
//         </View>

//     );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes

    const signoutHandler = () => {
        auth().
            signOut().
            then(() => navigation.navigate("Login"))
    }

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user.email}</Text>
            <Button
                title="Sign out"
                onPress={signoutHandler}
            />
        </View>
    );
}
export default HomeScreen;