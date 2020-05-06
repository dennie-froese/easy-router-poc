import React, {Children, ReactNode} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
  children: ReactNode;
  title: string;
}

export default function Screen({children, title}: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {children}
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
