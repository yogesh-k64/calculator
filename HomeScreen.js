import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '/', '*'];
const width = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();
  const [result, setResult] = useState('');

  const inputChangeHandler = val => {
    setResult(prev => (prev += val));
  };
  const calculateResult = () => {
    let res;
    try {
      res = eval(result);
    } catch (err) {
      res = null;
    }

    navigation.navigate(res ? 'Result' : 'Error', {res: res});
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.lowerContainer}>
        <View style={styles.numberContainer}>
          {numbers.map(num => (
            <TouchableWithoutFeedback
              key={num}
              onPress={() => inputChangeHandler(num)}>
              <View style={styles.numButton}>
                <Text style={{fontSize: 20, color: '#494242'}}>{num}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
          <TouchableWithoutFeedback onPress={calculateResult}>
            <View style={styles.resultButton}>
              <Text style={{fontSize: 20, color: '#494242'}}>Result</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.operatorContainer}>
          {operators.map(opr => (
            <TouchableWithoutFeedback
              key={num}
              onPress={() => inputChangeHandler(opr)}>
              <View style={styles.numButton}>
                <Text style={{fontSize: 20, color: '#494242'}}>{opr}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f2f2',
    justifyContent: 'flex-end',
  },
  result: {
    fontSize: 50,
    textAlign: 'right',
    paddingRight: 20,
    color: '#494242',
  },
  lowerContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  numberContainer: {
    width: '70%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  operatorContainer: {
    width: '30%',
    alignItems: 'center',
  },
  numButton: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  resultButton: {
    margin: width * 0.01,
    width: width * 0.4,
    height: width * 0.2,
    borderRadius: width * 0.1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
