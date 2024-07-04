import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const [name, setName] = useState('User');
  const [newName, setNewName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {name}!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter new name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setName(newName)}
      >
        <Text style={styles.buttonText}>Change Name</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
