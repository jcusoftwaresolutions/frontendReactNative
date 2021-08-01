import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-paper';

import auth from '@react-native-firebase/auth';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  auth()
    .signOut()
    .then(() => console.log('User signed out!'));

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Button dark={true} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
        <Text>Login</Text>
      </View>
    );
  }



  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}


export default App;