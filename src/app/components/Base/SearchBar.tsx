// Core
import {
  FC,
  ReactElement,
  useContext,
  useState,
  ChangeEvent,
  FormEvent
} from 'react';

// Actions
import { findByName } from '../../init/actions';

// Instrument
import { ContextApp } from '../../init/reducer';

// Styles
import './searchBar.css';

export const SearchBar: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const { dispatch } = useContext(ContextApp);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function substringSearch(value: string, to: number, from: number): string {
    return value.substring(to, from);
  }

  function searchHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearchValue(substringSearch(value, 0, 20));
    dispatchSearch(value);
  }

  function dispatchSearch(value: string) {
    dispatch(findByName(value));
  }

  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <input 
        type='search'
        required
        value={searchValue}
        onChange={searchHandler}
      />
      <button className="search-btn" type='submit'>
        <span>Search</span>
      </button>
    </form>
  );
};
