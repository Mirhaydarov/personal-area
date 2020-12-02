// Core
import { FC, ReactElement, ChangeEvent } from 'react';

type LabelPropsTypes = {
  msg: string;
  iType: string;
  iHolder: string;
  iValue: string;
  IOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

export const Label: FC<LabelPropsTypes> = (props): ReactElement => {
  const { msg, iType, iHolder, iValue, IOnChange } = props;

  return (
    <label className='edit-form__label'>
      <span className='edit-form__label-desc'>
        { msg }
      </span>
      <input
        className='edit-form__input'
        type={iType}
        placeholder={iHolder}
        value={iValue}
        onChange={IOnChange}
      />
    </label>
  )
};