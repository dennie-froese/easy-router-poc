import React from 'react';

type Action = {type: 'login'};
type NavigationProviderProps = {children: React.ReactNode};
type State = {journey: string};
type Dispatch = (action: Action) => void;

const NavigationStateContext = React.createContext<State | undefined>(
  undefined,
);
const NavigationDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

function navReducer(state: State, action: Action) {
  switch (action.type) {
    case 'login': {
      return {...state, journey: 'login'};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function NavigationProvider({children}: NavigationProviderProps) {
  const [state, dispatch] = React.useReducer(navReducer, {
    journey: 'unauthorised',
  });

  return (
    <NavigationStateContext.Provider value={state}>
      <NavigationDispatchContext.Provider value={dispatch}>
        {children}
      </NavigationDispatchContext.Provider>
    </NavigationStateContext.Provider>
  );
}

function useNavigationState() {
  const context = React.useContext(NavigationStateContext);
  if (context === undefined) {
    throw new Error(
      'useNavigationState must be used within a NavigationProvider',
    );
  }
  return context;
}

function useNavigationDispatch() {
  const context = React.useContext(NavigationDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useNavigationDispatch must be used within a NavigationProvider',
    );
  }
  return context;
}

export {NavigationProvider, useNavigationState, useNavigationDispatch};
