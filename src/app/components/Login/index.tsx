// Core
import { FC, ReactElement, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

// Types
import { MockUserTypes } from './types';

// Hooks
import { useInput } from './hooks/useInput';
import { useRegisterUser } from './hooks/useRegisterUser';

// Components
import { Button } from '../Base/Button';
import { ErrorInput } from '../Error/Input';
import { FormInput } from '../FormInput';

// Path
import { book } from '../../routes/book';

// Styles
import './login.css';

const mockUser: MockUserTypes = {
  email: 'admin@mail.com',
  password: 'admin',
};

export const Login: FC = (): ReactElement => {
  const history = useHistory();
  const { access_token } = useRegisterUser(mockUser);
  const email = useInput('admin@mail.com', { isEmpty: true, minLength: 5 , isEmail: true });
  const password = useInput ('admin', { isEmpty: true, minLength: 3 , maxLength: 8});

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (access_token) condition();
  }

  function condition() {
    const isEmailAndPasswordCorrect = 
      email.value === mockUser.email 
      && password.value === mockUser.password;

    isEmailAndPasswordCorrect ? redirectIfAuthentication() : alertEmailOrPasswordError();
  }

  function alertEmailOrPasswordError() {
    const message = 'Wrong email or password';
    alert(message);
  }

  function redirectIfAuthentication() {
    history.push(book.personal);
  }
  
  return (
    <section className="form-section">
      <div className="wrap">
        <div className="form-section__box">
          <div className="sample">
            <h2>
              Email:
              {' '}
              <span className="sample__desc">admin@mail.com</span>
            </h2>
            <h2>
              Password:
              {' '}
              <span className="sample__desc">admin</span>
            </h2>
          </div>
          <div className="form-box">
            <form className="form" onSubmit={submitHandler}>
              <div className="form__title">
                <h2>Login form</h2>
              </div>
              <div className="form__group">
                <FormInput
                  labelClassName='form__label'
                  spanClassName='icon icon__user'
                  inputClassName='form__input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email.value}
                  onChange={email.onChange}
                  onBlur={email.onBlur}
                />
                {( email.isDirty && email.isEmpty ) && <ErrorInput message="can't be empty" />}
                {( email.isDirty && email.emailError ) && <ErrorInput message="Email is Incorrect" />}
                {( email.isDirty && email.minLengthError ) && <ErrorInput message="Incorrect length" />}
                <FormInput
                  labelClassName='form__label'
                  spanClassName='icon icon__password'
                  inputClassName='form__input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password.value}
                  onChange={password.onChange}
                  onBlur={password.onBlur}
                />
                {( password.isDirty && password.isEmpty ) && <ErrorInput message="Password can't be empty" />}
                {( password.isDirty && password.minLengthError ) && <ErrorInput message="Incorrect length" />}
                {( password.isDirty && password.maxLengthError ) && <ErrorInput message="Incorrect length" />}
              </div>
              <Button
                type='submit'
                message='Login'
                className="form__button"
                disabled={!email.inputValid || !password.inputValid}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
