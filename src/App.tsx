import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './Routes/RootNavigator';

type Props = {};

const App = (props: Props) => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
