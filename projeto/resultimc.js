import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';

export default function resultimc(props) {
    
  return (
  
    <View style={styles.container}>
         <Text>{props.Resultimc2}</Text>
      <Text>{props.Messegeinputimc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
