import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/mainlayout';

const AboutScreen = ({ navigation }) => {
  return (
<MainLayout>
      <Text>My App</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>

  );
};

export default AboutScreen;
