import React from "react";

const Button = ({ onClick, children, className, bgColor = "primary" }) => {
  const bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "second":
      bgClassName = "bg-second";
      break;
    default:
      break;
  }
  return (
    <button
      className={`py-3 px-6 w-full ${bgClassName} rounded-lg mt-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
