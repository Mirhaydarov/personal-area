// Core
import { FC, ReactElement } from 'react';

// Components
import { CustomLink } from '../Base/Link';

// Route
import { book } from '../../routes/book';

// Styles
import './e404.css';

export const E404: FC = (): ReactElement => (
  <article className="error">
    <div className="wrap">
      <h2 className="error__title">Page Not Found</h2>
      <p className="error__desc">We can't find the page you're looking for.</p>
      <p className="error__desc">You can either return to the previous page, or visit our home page.</p>
      <CustomLink message="Visit Homepage" to={book.root} className="error__link-to-home" />
    </div>
  </article>
)
