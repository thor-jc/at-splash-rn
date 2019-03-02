import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthApp } from 'at-auth-rn';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthApp />
        <Text> HEY WTF!!! </Text>
        <AuthApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
