import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import ProfileButton from './components/ProfileButton'; // ตรวจสอบ path ให้ถูกต้อง

export default function Home({ navigation, route }) {
  const { email = '', phone = '' } = route.params || {}; // รับข้อมูลจาก route parameters

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1503/1503151.png' }}
        />
        <Text style={styles.profileName}>ชื่อ: สมชาย ใจดี</Text>
        <Text style={styles.profileDetail}>ตำแหน่ง: นักพัฒนาโปรแกรม</Text>
        <TextInput
          style={styles.input}
          placeholder="อีเมล"
          value={email}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="เบอร์โทรศัพท์"
          value={phone}
          editable={false}
        />
        <ProfileButton
          title="กลับไปหน้าหลัก"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileDetail: {
    fontSize: 18,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
});
