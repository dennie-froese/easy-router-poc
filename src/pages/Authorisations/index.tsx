import React from 'react';
import PrimaryButton from 'components/PrimaryButton';
import Screen from 'components/Screen';
import {pushAuthorisationsApprove} from 'navigation/AuthorisationRouter';

export default function Authorisations() {
  return (
    <Screen title="Authorisations page">
      <PrimaryButton onPress={pushAuthorisationsApprove} />
    </Screen>
  );
}
