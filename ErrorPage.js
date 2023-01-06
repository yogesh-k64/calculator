import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Something went wrong</Text>
      <Text style={styles.resultText}>Try Again</Text>
    </View>
  );
};

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 30,
    color: '#494242',
    textAlign: 'center',
  },
});
