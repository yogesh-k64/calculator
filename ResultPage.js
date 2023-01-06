import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ResultPage = props => {
  const result = props.route.params.res;
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{'Result'}</Text>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 50,
    color: '#494242',
  },
});
