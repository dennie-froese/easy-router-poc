import React from 'react';
import EasyRouter from 'react-native-easy-router';
import Biometry from 'pages/Biometry';

export default function BiometryRouter() {
  return <EasyRouter initialStack="Biometry" screens={{Biometry}} />;
}
