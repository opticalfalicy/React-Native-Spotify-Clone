import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Top of the POPS!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
