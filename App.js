import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Updated import statement
import styles from './src/styles/appStyles';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sqaure1} />
      <View style={styles.sqaure2} />
      <View style={styles.sqaure3} />
      <View style={styles.sqaure4} />
      {/* <View style={styles.sqaure1}></View> */}
    </View>
  );
};

export default App;
