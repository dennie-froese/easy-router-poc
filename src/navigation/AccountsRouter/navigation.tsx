import {EasyRouterNavigator} from 'react-native-easy-router';

let router: EasyRouterNavigator;

export function pushTransactions() {
  router.push('Transactions');
}

export function setRouter(r: any) {
  router = r;
}
