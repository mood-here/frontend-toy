import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function LoungeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dot Slash Dash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 70,
    height: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
  },
});
