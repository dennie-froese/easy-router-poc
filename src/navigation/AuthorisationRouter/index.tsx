import React from 'react';
import EasyRouter from 'react-native-easy-router';
import Authorisations from 'pages/Authorisations';

export default function AuthorisationsRouter() {
  return (
    <EasyRouter initialStack="Authorisations" screens={{Authorisations}} />
  );
}
