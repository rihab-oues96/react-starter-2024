import React from "react";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={value}
    />
  );
};

export default Input;
