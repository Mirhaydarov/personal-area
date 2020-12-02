// Api
import { path } from './config';

// Types
import {
  FetchTokenTypes,
  TokenTypes, 
  ContactsTypes,
  ContactTypes,
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

  async getContactsFetch(token: TokenTypes): Promise<ContactsTypes> {
    const response = await fetch(`${path.root}/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const json: Promise<ContactsTypes> = response.json();
    return json;
  },

  async addContactFetch(data: ContactTypes): Promise<ResponseFetchTypes> {
    const response = await fetch(`${path.root}/add-contact`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json: Promise<ResponseFetchTypes> = response.json();
    return json;
  },

  async editContactFetch(data: ContactTypes, id: string): Promise<ResponseFetchTypes> {
    const response = await fetch(`${path.root}/edit-contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json: Promise<ResponseFetchTypes> = response.json();
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
