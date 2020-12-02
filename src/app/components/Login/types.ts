/* eslint-disable camelcase */
export type MockUserTypes = {
  email: string,
  password: string | number,
}

export type ValidationsTypes = {
  isEmpty?: boolean;
  isEmail?: boolean;
  minLength?: number;
  maxLength?: number;
}