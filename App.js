import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from './firebase';

const App = () => {
  useEffect(() => {
    // Test Firebase connection
    const checkFirebase = async () => {
      try {
        const user = await firebase.auth().signInAnonymously();
        console.log('User ID:', user.user.uid);
      } catch (error) {
        console.log('Error signing in anonymously:', error);
      }
    };
    checkFirebase();
  }, []);

  return (
    <View>
      <Text>Welcome to Holistic Wellness App</Text>
    </View>
  );
};

export default App;
