// Core
import { createContext } from 'react';

// Types 
import { 
  FETCH_TOKEN,
  FETCH_CONTACTS_SUCCESS,
  DELETE_CONTACT,
  FIND_BY_NAME,
  InitialStateTypes,
  ContextAppTypes,
  RootReducerActionsTypes
} from './types';

export const initialState: InitialStateTypes = {
  contacts: [],
  access_token: '',
  searchValue: '',
};

export const ContextApp = createContext<ContextAppTypes>({ state: initialState, dispatch: () => {} });

export const rootReducer = (state = initialState, action: RootReducerActionsTypes): InitialStateTypes => {
  switch(action.type) {
    case FETCH_CONTACTS_SUCCESS: 
      return {
        ...state,
        contacts: action.payload,
      }

    case FETCH_TOKEN:
      return {
        ...state,
        access_token: action.payload,
      };
    
    case DELETE_CONTACT:
      return {
        ...state,
      };
    
    case FIND_BY_NAME:
      return {
        ...state,
        searchValue: action.payload,
      }

    default:
      return state;
  }
};