import React from "react";

const Button = ({ onClick, children, className, bgColor = "bg-primary" }) => {
  switch (bgColor) {
    case "primary":
      bgColor = "bg-primary";
      break;
    case "second":
      bgColor = "bg-second";
    default:
      break;
  }
  return (
    <button
      className={`py-3 px-6 w-full bg-primary rounded-lg mt-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
