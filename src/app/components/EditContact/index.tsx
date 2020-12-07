// Core
import {
  FC,
  ReactElement,
  FormEvent,
  useContext,
  useState,
} from 'react';
import { match } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// Hooks
import { useInput } from '../Login/hooks/useInput';

// Components
import { BaseLink } from '../Base/Link';
import { Button } from '../Base/Button';
import { Label } from './Label';
import { Authorization } from '../Error/Authorization';

// Instruments
import { ContextApp } from '../../init/reducer';
import { takeContactValue } from './takeContactValue';

// Api
import { api } from '../../api';

// Path
import { book } from '../../routes/book';

// Styles
import './editContact.css';

const history = createMemoryHistory();

type RouterProps = {
  history: typeof history,
  match: match<{ id: string }>;
};

export const EditContact: FC<RouterProps> = ({ match, history }): ReactElement => {
  const { params: { id } } = match;

  const [disabled, setDisabled] = useState(false);
  const { state } = useContext(ContextApp);
  const { access_token, contacts } = state;

  const contact = contacts.find(idx => idx.id === +id);

  const { contactName, contactEmail, contactJob } = takeContactValue(contact);

  const name = useInput(contactName, {});
  const email = useInput(contactEmail, {});
  const job = useInput(contactJob, {});

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisabled(true);

    api.editContactFetch({ name: name.value, email: email.value, job: job.value }, id);
    
    setTimeout(() => {
      setDisabled(false);
      history.push(book.personal);
    }, 1000)
    
  };

  if (!access_token) return <Authorization />;

  return (
    <section className="edit-contact">
      <div className="wrap">
        <div className="form-box">
          <form className="edit-form" onSubmit={submitHandler} >
            <div className="edit-form__title">
              <h2>Edit Contact</h2>
            </div>
            <div className="edit-form__group">
              <Label
                msg='Full Name'
                iType='text'
                iHolder='Mark G.Rico'
                iValue={name.value}
                IOnChange={(event) => name.onChange(event)}
              />
              <Label
                msg='Email'
                iType='email'
                iHolder='Example@gmail.com'
                iValue={email.value}
                IOnChange={(event) => email.onChange(event)}
              />
              <Label
                msg='Job'
                iType='text'
                iHolder='Manger'
                iValue={job.value}
                IOnChange={(event) => job.onChange(event)}
              />
            </div>
            <div className="edit-form__btn-box">
              <Button type="submit" message="Edit Contact" className="edit-form__btn" disabled={disabled}/>
              <BaseLink msg="Visit Contacts Page" to={book.personal} className="edit-form__visit-contacts-page"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}