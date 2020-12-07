// Core
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

// Styles
import'./link.css';

type PropTypes = {
  message: string;
  to: string;
  className: string;
};

export const CustomLink: FC<PropTypes> = ({
  className,
  message,
  to,
}): ReactElement => (
  <Link
    to={to}
    className={`link ${className}`}
  >
    {message}
  </Link>
);

