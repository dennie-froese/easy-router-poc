import React, {useCallback} from 'react';
import PrimaryButton from 'components/PrimaryButton';
import Screen from 'components/Screen';
import {useNavigationDispatch} from 'context/NavigationContext';

export default function Binding() {
  const dispatch = useNavigationDispatch();

  const onPress = useCallback(() => {
    dispatch({type: 'login'});
  }, []);

  return (
    <Screen title="Binding page">
      <PrimaryButton onPress={onPress} />
    </Screen>
  );
}
