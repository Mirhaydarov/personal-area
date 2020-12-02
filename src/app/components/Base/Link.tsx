// Core
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

// Styles
import'./link.css';

type PropTypes = {
  msg: string;
  to: string;
  className: string;
};

export const BaseLink: FC<PropTypes> = ({
  className,
  msg,
  to,
}): ReactElement => (
  <Link
    to={to}
    className={`link ${className}`}
  >
    {msg}
  </Link>
);

