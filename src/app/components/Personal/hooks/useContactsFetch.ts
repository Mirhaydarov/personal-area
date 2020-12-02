// Core
import { useEffect, useContext } from 'react';

// Actions
import { fetchContacts } from '../../../init/actions';

// Instruments
import { ContextApp } from '../../../init/reducer';

// Utils
import { normalize } from '../../../../utils';

// Api
import { api } from '../../../api';

export const useContactsFetch = () => {
  const { state, dispatch } = useContext(ContextApp);
  const { contacts, access_token, searchValue } = state;

  useEffect(() => {
    api.getContactsFetch(access_token)
      .then(data => dispatch(fetchContacts(data)))
      .catch(error => console.log(error));
  }, [dispatch, access_token]);

  if (!Array.isArray(contacts)) {
    return {
      contactsList: null,
    };
  };

  const filterContacts = contacts.filter((contact) =>
  normalize(contact.name).includes(normalize(searchValue)));

  return {
    contactsList: filterContacts,
  };
};
