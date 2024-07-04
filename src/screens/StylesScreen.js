// src/screens/StylesScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';  // ตรวจสอบ path ให้ถูกต้อง

export default function StylesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Styles Page</Text>
      <Text style={styles.boxText}>นี่คือตัวอย่างของการใช้ External Style</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>กลับไปหน้าหลัก</Text>
      </TouchableOpacity>
    </View>
  );
}
