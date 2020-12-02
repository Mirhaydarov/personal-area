// Core
import { FC, ReactElement } from "react";

// Styles
import './input.css';

type PropsTypes = {
  message: string;
};

export const ErrorInput: FC<PropsTypes> = ({ message }): ReactElement => {
  return (
    <div className="error-input">{ message } </div>
  );
};