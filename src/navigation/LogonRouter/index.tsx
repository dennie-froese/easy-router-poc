import React from 'react';
import EasyRouter from 'react-native-easy-router';
import Logon from 'pages/Logon';
import Binding from 'pages/Binding';

let router: any;

export default function LogonRouter() {
  return (
    <EasyRouter
      navigatorRef={setRouter}
      initialStack="Logon"
      screens={{Logon, Binding}}
    />
  );
}

export function pushBinding() {
  router.push('Binding');
}

function setRouter(r: any) {
  router = r;
}
