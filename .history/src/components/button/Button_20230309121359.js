import React from "react";

const Button = ({
  onClick,
  children,
  className = "",
  bgColor = "primary",
  full = false,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-second";
      break;
    default:
      break;
  }
  return (
    <button
      className={`py-3 px-6 ${
        full ? "w-full" : ""
      } ${bgClassName} rounded-lg mt-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
