// Types
import { ContactTypes } from '../../init/types';

export const takeContactValue = (contact: ContactTypes | undefined) => {
  function contactGuard(x: any): x is object {
    return typeof x === "object";
  }

  if (contactGuard(contact)) {
    const contactName = contact.name;
    const contactEmail = contact.email;
    const contactJob = contact.job;
    return {
      contactName, 
      contactEmail, 
      contactJob
    };
  }
  return {
    contactName: '', 
    contactEmail: '', 
    contactJob: '',
  };
};