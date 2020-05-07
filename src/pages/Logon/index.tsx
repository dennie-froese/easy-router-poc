import React from 'react';
import PrimaryButton from 'components/PrimaryButton';
import Screen from 'components/Screen';
import {pushBinding} from 'navigation/LogonRouter';

export default function Logon() {
  return (
    <Screen title="Logon page">
      <PrimaryButton onPress={pushBinding} />
    </Screen>
  );
}
