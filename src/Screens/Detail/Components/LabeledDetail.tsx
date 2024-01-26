import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  label: string;
  value?: string;
  paddingVertical?: number;
};

const LabeledDetail = ({label, value, paddingVertical = 10}: Props) => {
  return (
    <View style={{gap: 4, width: '50%', paddingVertical}}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default LabeledDetail;

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
    fontSize: 18,
    color: 'gray',
  },
  value: {
    fontWeight: '700',
    fontSize: 15,
    color: '#000',
  },
});
