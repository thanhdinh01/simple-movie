import React from "react";

const Button = ({
  onClick,
  children,
  className = "",
  bgColor = "primary",
  full = false,
  ...props
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
      }  rounded-lg mt-auto ${className} ${bgClassName}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
