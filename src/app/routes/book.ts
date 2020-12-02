type BookTypes = {
  root: string;
  login: string;
  personal: string;
  addContact: string;
  editContact: string;
};

export const book: BookTypes = Object.freeze({
  root: '/',
  login: '/auth/login',
  personal: '/personal',
  addContact: '/personal/add-contact',
  editContact: '/personal/edit-contact',
});
