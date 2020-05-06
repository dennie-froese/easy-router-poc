import React from 'react';
import EasyRouter from 'react-native-easy-router';
import Logon from 'pages/Logon';

export default function LogonRouter() {
  return <EasyRouter initialStack="Logon" screens={{Logon}} />;
}
