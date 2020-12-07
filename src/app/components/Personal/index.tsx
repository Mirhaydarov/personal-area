// Core
import  { FC, ReactElement, useContext, useState } from 'react';

// Hooks
import { useContactsFetch } from './hooks/useContactsFetch';

// Components
import { BaseLink } from '../Base/Link';
import { Button } from '../Base/Button';
import { BaseSearchBar } from '../Base/SearchBar';
import { Authorization } from '../Error/Authorization';

// Actions
import { fetchContacts } from '../../init/actions';

// Instruments
import { ContextApp } from '../../init/reducer';

// Api
import { api } from '../../api';

// Path
import { book } from '../../routes/book';

// Styles
import './contactListTile.css';

export const Personal: FC = (): ReactElement => {
  const [disabled, setDisabled] = useState(false);
  const { contactsList } = useContactsFetch();
  const { state, dispatch } = useContext(ContextApp);

  if (!Array.isArray(contactsList)) {
    return <Authorization />
  }

  const deleteHandler = (id: number = 0) => {
    setDisabled(true);

    const newContacts = state.contacts.filter(contact => contact.id !== id);
    dispatch(fetchContacts(newContacts));

    setTimeout(() => {
      setDisabled(false);
      api.deleteContactFetch(id);
    }, 650);
  };

  const contacts = contactsList.map(({ id, name, email, job }) => (
    <ul key={id} className="contacts__list">
      <li>{name}</li>
      <li className="contacts__item-email">{email}</li>
      <li className="contacts__item-job">{job}</li>
      <li>
        <div className="contacts__list-box">
          <BaseLink
            className="contacts__list-btn contacts__list-btn--edit"
            msg="Edit"
            to={`${book.editContact}/${id}`}
          />
          <Button
            className="contacts__list-btn contacts__list-btn--delete"
            type="button"
            message="Delete"
            onClick={() => deleteHandler(id)}
            disabled={disabled}
          />
        </div>
      </li>
    </ul>
  ));

  return (
    <main>
      <div className="wrap">
        <h2 className="contacts-title">Contacts</h2>
        <div className="contacts">
          <nav className="contacts__nav">
            <BaseSearchBar />
            <BaseLink msg="Add contact" to={book.addContact} className="contacts__add-new-contact" />
          </nav>
          {contacts}
        </div>
      </div>
    </main>
  );
};
