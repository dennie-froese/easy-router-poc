import React from 'react';
import EasyRouter from 'react-native-easy-router';
import Balances from 'pages/Balances';

export default function AccountsRouter() {
  return <EasyRouter initialStack="Balances" screens={{Balances}} />;
}
