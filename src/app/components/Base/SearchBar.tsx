// Core
import { FC, ReactElement, useContext, useState, ChangeEvent } from 'react';

// Actions
import { findContact } from '../../init/actions';

// Instrument
import { ContextApp } from '../../init/reducer';

// Styles
import './searchBar.css';

export const BaseSearchBar: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const { dispatch } = useContext(ContextApp);

  const searchContactHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = event.target;

    setSearchValue(value.substring(0, 20));
    dispatch(findContact(value));
  };

  return (
    <form className="search-bar" onSubmit={event => event.preventDefault()}>
      <input 
        type='search'
        required value={searchValue}
        onChange={(event) => searchContactHandler(event)}
      />
      <button className="search-btn" type='submit'>
        <span>Search</span>
      </button>
    </form>
  );
};
