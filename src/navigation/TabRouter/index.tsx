import React, {useCallback, useState} from 'react';
import EasyRouter from 'react-native-easy-router';
import {routes} from './routes';
import {View, Text, TouchableOpacity} from 'react-native';
import Biometry from 'pages/Biometry';

let router: any;

export default function TabRouter() {
  const [bioFinished, setBioFinished] = useState(false);

  function bioFinish() {
    setBioFinished(true);
  }

  const goBalances = useCallback(() => {
    replace('Balances');
  }, []);

  const goAuthorisations = useCallback(() => {
    replace('Authorisations');
  }, []);

  const goSupport = useCallback(() => {
    replace('Support');
  }, []);

  return !bioFinished ? (
    <Biometry onPress={bioFinish} />
  ) : (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 50,
          backgroundColor: 'grey',
        }}>
        <TouchableOpacity onPress={goBalances}>
          <Text>Balances</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goAuthorisations}>
          <Text>Authorisations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goSupport}>
          <Text>Support</Text>
        </TouchableOpacity>
      </View>
      <EasyRouter
        navigatorRef={setRouter}
        initialStack="Balances"
        screens={routes}
      />
    </View>
  );
}

function setRouter(r: any) {
  router = r;
}

function replace(tabName: keyof typeof routes) {
  router.reset(tabName);
}
