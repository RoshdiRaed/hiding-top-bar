import React, { useState } from "react";

const TopBar = ({ isOpen, onClick }) => {
  return (
    <div
      className={`bg-blue-500 text-white p-4 fixed top-0 left-0 right-0 h-16 z-10 transition-transform ${
        isOpen ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>Here is your promotional message!</div>
        <button onClick={onClick}>Close</button>
      </div>
    </div>
  );
};

export default TopBar;
