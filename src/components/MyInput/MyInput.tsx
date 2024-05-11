import React from "react";
import "./styles/myInput.css";

type InputProps = {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

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
    </React.Fragment>
  );
};

export default MyInput;
