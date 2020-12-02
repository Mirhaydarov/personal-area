// Core
import { useEffect, useContext } from 'react';

// Types
import {
  MockUserTypes
} from '../types';

// Actions
import { fetchToken } from '../../../init/actions';

// Instruments
import { ContextApp } from '../../../init/reducer';

// Api
import { api } from '../../../api';

export const useRegister = (mockData: MockUserTypes) => {
  const { state, dispatch } = useContext(ContextApp);
  const { access_token } = state;

  useEffect(() => {
    api.userRegisterFetch(mockData).then(({ access_token }) => dispatch(fetchToken(access_token)));
  }, [mockData, dispatch])

  return {
    access_token,
  }

}