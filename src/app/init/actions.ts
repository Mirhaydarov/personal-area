// Types
import { 
  FETCH_TOKEN,
  FETCH_CONTACTS_SUCCESS,
  DELETE_CONTACT,
  FIND_CONTACT,
  TokenTypes,
  ContactsTypes,
  FilterContactTypes,
  fetchTokenActionTypes,
  fetchContactsSuccessTypes,
  deleteContactAction,
  FindContactAction,
} from './types';

export const fetchToken = (payload: TokenTypes): fetchTokenActionTypes => {
  return {
    type: FETCH_TOKEN,
    payload,
  }
};

export const fetchContacts = (payload: ContactsTypes): fetchContactsSuccessTypes => {
  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload,
  }
};

export const deleteContact = (payload: number): deleteContactAction => {
  return {
    type: DELETE_CONTACT,
    payload,
  }
};

export function findContact(payload: FilterContactTypes): FindContactAction {
  return {
    type: FIND_CONTACT,
    payload,
  };
}
