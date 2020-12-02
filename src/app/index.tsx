// Core
import { FC, ReactElement, useReducer } from 'react';

// Instruments
import { ContextApp, initialState, rootReducer } from "./init/reducer";

// Route
import { Routes } from './routes';

export const App: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  
  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      <Routes />
    </ContextApp.Provider>
  );
};
