import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  button: {
    padding: 8,
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default Footer;
