// Api
import { path } from './config';

// Types
import { FetchTokenTypes } from '../init/types';
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
  }
}
