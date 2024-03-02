import React from "react";

const ScrollableContent = ({ isOpen, children }) => {
  return (
    <div
      className={`transition-transform ${
        isOpen ? "transform translate-y-16" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollableContent;
