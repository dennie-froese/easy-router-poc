import React from 'react';
import {View} from 'react-native';
import LogonRouter from '../LogonRouter';

export default function Framework() {
  return (
    <View style={{flex: 1}}>
      <LogonRouter />
    </View>
  );
}
