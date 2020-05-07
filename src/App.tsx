import React from 'react';
import Framework from 'navigation/Framework';
import {NavigationProvider} from 'context/NavigationContext';

export default function App() {
  return (
    <NavigationProvider>
      <Framework />
    </NavigationProvider>
  );
}
