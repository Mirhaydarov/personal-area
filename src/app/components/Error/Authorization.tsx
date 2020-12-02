// Core
import { FC, ReactElement } from "react";

// Components
import { BaseLink } from '../Base/Link';

// Route
import { book } from '../../routes/book';

// Styles
import './authorization.css';

export const Authorization: FC = (): ReactElement => {
  return (
    <article className="authorization-error">
      <div className="wrap">
        <h2 className="authorization-error__title">Unauthorized</h2>
        <p className="authorization-error__desc">You should authorization first.</p>
        <p className="error__desc">You can either return to the previous page, or visit our login page.</p>
        <BaseLink msg="Visit Login Page" to={book.login} className="error__link-to-login" />
      </div>
    </article>
  );
};
