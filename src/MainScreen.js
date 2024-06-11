import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileButton from './components/ProfileButton'; // ตรวจสอบ path ให้ถูกต้อง

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Main Screen</Text>
      <ProfileButton
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {
          email: 'somchai@example.com',
          phone: '0123456789'
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
