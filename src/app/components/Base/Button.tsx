// Core
import { FC, ReactElement } from 'react';

// Styles
import'./button.css';

type ButtonTypes = 'submit' | 'button' | 'reset';

type PropTypes = {
  msg: string;
  type: ButtonTypes;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const BaseButton: FC<PropTypes> = ({
  className,
  msg,
  type,
  onClick,
  disabled,
}): ReactElement => (
  <button
    type={type}
    className={`button button__view-size--sm ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {msg}
  </button>
);
