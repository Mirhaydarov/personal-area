// Core
import { FC, ReactElement, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

// Types
import { MockUserTypes } from './types';

// Hooks
import { useInput } from './hooks/useInput';
import { useRegister } from './hooks/useRegister';

// Components
import { Button } from '../Base/Button';
import { ErrorInput } from '../Error/Input';

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
  const { access_token } = useRegister(mockUser);
  const email = useInput('admin@mail.com', { isEmpty: true, minLength: 5 , isEmail: true });
  const password = useInput ('admin', { isEmpty: true, minLength: 3 , maxLength: 8});

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (access_token) {
      const condition = email.value === mockUser.email && password.value === mockUser.password;
      const alertMessage = 'Wrong email or password';

      condition ? history.push(book.personal) : alert(alertMessage);
    }
  };
  
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
                <label className="form__label">
                  <span className="icon icon__user" />
                  <input
                    className="form__input"
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email.value}
                    onChange={(event) => email.onChange(event)}
                    onBlur={(event) => email.onBlur(event)}
                    />
                </label>
                {( email.isDirty && email.isEmpty ) && <ErrorInput message="can't be empty" />}
                {( email.isDirty && email.emailError ) && <ErrorInput message="Email is Incorrect" />}
                {( email.isDirty && email.minLengthError ) && <ErrorInput message="Incorrect length" />}
                <label className="form__label">
                  <span
                    className="icon icon__password"
                  />
                  <input
                    className="form__input"
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password.value}
                    onChange={(event) => password.onChange(event)}
                    onBlur={(event) => password.onBlur(event)}
                  />
                </label>
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
