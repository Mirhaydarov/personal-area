// Api
import { path } from './config';

// Types
import {
  FetchTokenTypes,
  ResponseFetchTypes
} from '../init/types';
import { MockUserTypes } from '../components/Login/types';

export const api = {
  async userRegisterFetch(data: MockUserTypes): Promise<FetchTokenTypes> {
    const response = await fetch(`${path.root}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json: Promise<FetchTokenTypes> = response.json();
    return json;
  },

  async deleteContactFetch(id: number): Promise<ResponseFetchTypes> {
    const response = await fetch(`http://localhost:8080/delete-contact/${id}`, {
    method: 'DELETE'
    });
    const json: Promise<ResponseFetchTypes> = response.json();
    return json;
  }
}
