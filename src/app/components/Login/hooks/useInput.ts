// Core
import { ChangeEvent, useState } from "react";

// Hooks
import { useValidation } from './useValidation';

// Types
import { ValidationsTypes } from '../types';

export const useInput = (initialValue: string, validations: ValidationsTypes) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);


  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
  }

  const onBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    setIsDirty(true);
  }

  const clearInput = () => {
    setValue('');
  };

  return {
    ...valid,
    value,
    onChange,
    onBlur,
    isDirty,
    clearInput,
  };
}
