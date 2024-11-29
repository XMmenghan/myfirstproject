
import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/mainlayout';

const HomeScreen = ({ navigation }) => {

  return (
    <MainLayout>
      <Text>Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
};

export default HomeScreen;
