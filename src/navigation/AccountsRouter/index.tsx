import React from 'react';
import EasyRouter from 'react-native-easy-router';
import Balances from 'pages/Balances';
import Transactions from 'pages/Transactions';
import {setRouter} from './navigation';

export default function AccountsRouter() {
  return (
    <EasyRouter
      navigatorRef={setRouter}
      initialStack="Balances"
      screens={{Balances, Transactions}}
    />
  );
}
