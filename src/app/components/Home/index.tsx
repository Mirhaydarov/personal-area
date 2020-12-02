// Core
import { FC, ReactElement } from 'react';

// Components
import { BaseLink } from '../Base/Link';

// Route
import { book } from '../../routes/book';

// Styles
import './home.css';

export const Home: FC = (): ReactElement => (
  <main>
    <div className="wrap">
      <div className="welcome">
        <h1 className="welcome__title">Welcome!</h1>
        <BaseLink msg="Login" to={book.login} className="welcome__link-to-login" />
      </div>
    </div>
  </main>
);

