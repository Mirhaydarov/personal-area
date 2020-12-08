// Core
import { FC, ReactElement, ChangeEvent, FocusEvent } from 'react';

export type InputPropsTypes = {
  inputClassName: string;
  type: string;
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void | undefined;
} 

export const Input: FC<InputPropsTypes> = (props): ReactElement => {
  const {
    inputClassName,
    type,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
  } = props;

  return (
    <input
      className={inputClassName}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
};