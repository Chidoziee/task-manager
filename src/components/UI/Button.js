import React from "react";
import "./Button.css";
const Button = ({ children, className }) => {
  return (
    <button className={`button ${className}`} type="submit">
      {children}
    </button>
  );
};

export default Button;
