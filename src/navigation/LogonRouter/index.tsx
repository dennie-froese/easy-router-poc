import React from 'react';
import {StyleSheet} from 'react-native';
import EasyRouter from 'react-native-easy-router';
import Logon from 'pages/Logon';

export default function LogonRouter() {
  return <EasyRouter initialStack="Logon" screens={{Logon}} />;
}
