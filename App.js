import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerTitle: {
          backgroundColor: '#f4511e'
        }
      }}>
        <Stack.Screen
          name="Login" component={Login}
          options={{
            title: 'Login Screen',
          }}
        />
        <Stack.Screen
          name="Home" component={HomeScreen}
          options={{
            title: 'Overview',
            headerRight: () => (<Text>Pressed it</Text>)
          }}
        />

        <Stack.Screen
          name="DetailsScreen" component={DetailsScreen}
          options={{ title: 'Details Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;