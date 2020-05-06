import React from 'react';
import EasyRouter from 'react-native-easy-router';
import {routes} from './routes';

export default function TabRouter() {
  return <EasyRouter initialStack="Balances" screens={{routes}} />;
}
