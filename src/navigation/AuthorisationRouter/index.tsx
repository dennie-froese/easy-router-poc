import React from 'react';
import EasyRouter, {EasyRouterNavigator} from 'react-native-easy-router';
import Authorisations from 'pages/Authorisations';
import AuthorisationsApprove from 'pages/AuthorisationsApprove';

let router: EasyRouterNavigator;

export default function AuthorisationsRouter() {
  return (
    <EasyRouter
      initialStack="Authorisations"
      screens={{Authorisations, AuthorisationsApprove}}
      navigatorRef={setRouter}
    />
  );
}

export function pushAuthorisationsApprove() {
  router.push('AuthorisationsApprove');
}

function setRouter(r: any) {
  router = r;
}
