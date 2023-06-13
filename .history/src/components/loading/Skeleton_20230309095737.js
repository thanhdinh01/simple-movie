import React from "react";

const Skeleton = (props) => {
  return (
    <div
      style={{
        width: props.width || "100%",
        height: props.height,
        borderRadius: props.radius,
      }}
      className="skeleton"
    ></div>
  );
};

export default Skeleton;
