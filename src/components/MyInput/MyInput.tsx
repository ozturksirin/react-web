import React from "react";
import "./styles/myInput.css";
import { InputProps } from "./types";

const MyInput = (props: InputProps) => {
  const {
    type = "text",
    placeholder,
    disabled = false,
    name,
    value,
    onChange,
    error,
  } = props;
  return (
    <React.Fragment>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={name || placeholder}
        aria-describedby={error ? "error-message" : undefined}
        onChange={onChange}
        value={
          value !== undefined && value !== null && value !== ""
            ? value
            : undefined
        }
      />
      {error && <span className="error">{error}</span>}
    </React.Fragment>
  );
};

export default MyInput;
