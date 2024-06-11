import React from 'react';
import { Button } from 'react-native';

export default function ProfileButton({ onPress, title }) {
  return <Button title={title} onPress={onPress} />;
}
