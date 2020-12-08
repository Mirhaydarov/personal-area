// Core
import { FC, ReactElement } from 'react';

// Components
import { Input } from '../Base/Input';

// Types
import { InputPropsTypes } from '../Base/Input';

type FormInputTypes = {
  labelClassName: string;
  spanClassName: string;
  message?: string;
}

type FormInputPropsTypes = FormInputTypes & InputPropsTypes;

export const FormInput: FC<FormInputPropsTypes> = (props): ReactElement => {
  const {
    labelClassName,
    spanClassName,
    message,
  } = props;

  return (
    <label className={labelClassName}>
      <span className={spanClassName}>
        { message }
      </span>
      <Input {...props} />
    </label>
  )
};