// Core
import { FC, ReactElement } from 'react';

// Components
import { CustomLink } from '../Base/Link';

// Route
import { book } from '../../routes/book';

// Styles
import './home.css';

export const Home: FC = (): ReactElement => (
  <main>
    <div className="wrap">
      <div className="welcome">
        <h1 className="welcome__title">Welcome!</h1>
        <CustomLink message="Login" to={book.login} className="welcome__link-to-login" />
      </div>
    </div>
  </main>
);

