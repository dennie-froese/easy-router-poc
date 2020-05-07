import React from 'react';
import {View, Text} from 'react-native';
import LogonRouter from '../LogonRouter';
import {useNavigationState} from 'context/NavigationContext';
import TabRouter from 'navigation/TabRouter';

export default function Framework() {
  const {journey} = useNavigationState();
  return (
    <View style={{flex: 1}}>
      {journey === 'unauthorised' ? <LogonRouter /> : <TabRouter />}
    </View>
  );
}
