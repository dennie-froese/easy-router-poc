import React from 'react';
import PrimaryButton from 'components/PrimaryButton';
import Screen from 'components/Screen';

interface Props {
  onPress?: () => void;
}
export default function Biometry({onPress}: Props) {
  return (
    <Screen title="Biometry page">
      <PrimaryButton onPress={onPress} />
    </Screen>
  );
}
