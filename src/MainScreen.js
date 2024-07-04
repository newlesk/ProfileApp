import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function MainScreen({ navigation }) {
  const [name, setName] = useState('KruNew');
  const [age, setAge] = useState(26);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Portfolio{name}</Text>
      <TouchableOpacity onPress={()=>setName("Krittipong")}>
        <Text >เปลี่ยนชื่อ</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={[styles.box, styles.imageBox]}>
          <Text style={styles.boxText}>Image</Text>
        </View>
        <View style={[styles.box, styles.introBox]}>
          <Text style={styles.boxText}>แนะนำตัว</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.box, styles.workBox]}>
          <Text style={styles.boxText}>รูปผลงาน</Text>
        </View>
        <View style={[styles.box, styles.detailBox]}>
          <Text style={styles.boxText}>รายละเอียดผลงาน</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Styles')}>
        <Text >ไปยังหน้า Styles</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.link}>ไปยังหน้า Welcome</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 20,
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'black',
    padding: 20,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  imageBox: {
    backgroundColor: '#4FC3F7',
  },
  introBox: {
    backgroundColor: '#2196F3',
  },
  workBox: {
    backgroundColor: '#FFB74D',
  },
  detailBox: {
    backgroundColor: '#4CAF50',
  },
  boxText: {
    color: 'black',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});
