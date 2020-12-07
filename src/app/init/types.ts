// Core
import { Dispatch } from 'react';

export type TokenTypes = string;
export type FetchTokenTypes = {
  access_token: TokenTypes;
}

export type ContactTypes = {
  id?: number;
  name: string;
  email: string;
  job: string;
}

export type ResponseFetchTypes = {
  success: number;
  message: string;
}

export type ContactsTypes = ContactTypes[];

export type FilterContactTypes = string;

export type InitialStateTypes = {
  contacts: ContactsTypes;
  access_token: TokenTypes;
  searchValue: FilterContactTypes;
}

export const FETCH_TOKEN = 'FETCH_TOKEN';
export type fetchTokenActionTypes = {
  type: typeof FETCH_TOKEN,
  payload: TokenTypes;
}

export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export type fetchContactsSuccessTypes = {
  type: typeof FETCH_CONTACTS_SUCCESS,
  payload: ContactsTypes;
}

export const DELETE_CONTACT = 'DELETE_CONTACT';
export type deleteContactAction = {
  type: typeof DELETE_CONTACT,
  payload: number;
}

export const FIND_BY_NAME = 'FIND_BY_NAME';
export type FindContactAction = {
  type: typeof FIND_BY_NAME;
  payload: FilterContactTypes;
};


export type RootReducerActionsTypes = 
  fetchTokenActionTypes 
  | fetchContactsSuccessTypes 
  | deleteContactAction
  | FindContactAction

export type ContextAppTypes = {
  state: InitialStateTypes,
  dispatch : Dispatch<RootReducerActionsTypes>,
}