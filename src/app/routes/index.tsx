// Core
import { FC, ReactElement } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

// Components
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { AddContact } from '../components/AddContact';
import { Personal } from '../components/Personal';
import { EditContact } from '../components/EditContact';
import { E404 } from '../components/Error/E404';

// Route
import { book } from './book';

export const Routes: FC = (): ReactElement => (
  <Router>
    <Switch>
      <Route exact path={book.root} component={Home} />
      <Route exact path={book.login} component={Login} />
      <Route exact path={book.personal} component={Personal} />
      <Route exact path={book.addContact} component={AddContact} />
      <Route exact path={`${book.editContact}/:id`} component={EditContact} />
      <Route component={E404} />
      <Redirect to={book.root} />
    </Switch>
  </Router>
);
