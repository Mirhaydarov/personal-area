// Core
import { useState, useEffect } from "react";

// Types
import { ValidationsTypes } from '../types';

export const useValidation = (value: string, validations: ValidationsTypes) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch(validation) {
        case 'minLength':
          value.length < validations[validation]! ? setMinLengthError(true) : setMinLengthError(false);
        break;

        case 'maxLength':
          value.length > validations[validation]! ? setMaxLengthError(true) : setMaxLengthError(false);
        break;

        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
        break;

        case 'isEmail':
          const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regExp.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
        break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError]);

  return {
    isEmpty,
    emailError,
    minLengthError,
    maxLengthError,
    inputValid,
  }
}
