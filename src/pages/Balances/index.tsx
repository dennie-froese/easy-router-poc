import React from 'react';
import PrimaryButton from 'components/PrimaryButton';
import Screen from 'components/Screen';
import {pushTransactions} from 'navigation/AccountsRouter/navigation';

export default function Balances() {
  return (
    <Screen title="Balances page">
      <PrimaryButton onPress={pushTransactions} />
    </Screen>
  );
}
