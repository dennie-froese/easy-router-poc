import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';

export default function Support() {
  return (
    <View style={styles.container}>
      <Text>Support page</Text>
      <PrimaryButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
