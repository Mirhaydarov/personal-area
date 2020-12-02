// Core
import {
  FC,
  ReactElement,
  FormEvent,
  ChangeEvent,
  useContext,
  useState
} from 'react';

// Hooks
import { useInput } from '../Login/hooks/useInput';

// Components
import { BaseLink } from '../Base/Link';
import { BaseButton } from '../Base/Button';
import { Authorization } from '../Error/Authorization';

// Api
import { api } from '../../api';

// Path
import { book } from '../../routes/book';

// Instruments
import { ContextApp } from '../../init/reducer';

// Styles
import './addContact.css';

type LabelPropsTypes = {
  msg: string;
  iType: string;
  iHolder: string;
  iValue: string;
  IOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

const Label: FC<LabelPropsTypes> = (props): ReactElement => {
  const { msg, iType, iHolder, iValue, IOnChange } = props;

  return (
    <label className='add-form__label'>
      <span className='add-form__label-desc'>
        { msg }
      </span>
      <input
        className='add-form__input'
        type={iType}
        placeholder={iHolder}
        value={iValue}
        onChange={IOnChange}
      />
    </label>
  )
};

export const AddContact: FC = (): ReactElement => {
  const [disabled, setDisabled] = useState(false);
  const { state } = useContext(ContextApp);
  const { access_token } = state;

  const name = useInput('', {});
  const email = useInput('', {});
  const job = useInput('', {});

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisabled(true);

    setTimeout(() => {
      api.addContactFetch({ name: name.value, email: email.value, job: job.value });
      setDisabled(false);
    }, 1000); 
    
    [name, email, job].forEach(item => item.clearInput());
    
  };

  if (!access_token) return <Authorization />;

  return (
    <section className="new-contact">
      <div className="wrap">
        <div className="form-box">
          <form className="add-form" onSubmit={submitHandler} >
            <div className="add-form__title">
              <h2>Add Contact</h2>
            </div>
            <div className="add-form__group">
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
            <div className="add-form__btn-box">
              <BaseButton type="submit" msg="Add Contact" className="add-form__btn" disabled={disabled}/>
              <BaseLink msg="Visit Contacts Page" to={book.personal} className="add-form__visit-contacts-page"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}