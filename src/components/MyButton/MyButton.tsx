import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles/myButton.css";
import { ButtonProps } from "./types";

const MyButton = (props: ButtonProps) => {
  const {
    title = "My Button",
    onPress,
    buttonContainerStyle,
    height = 60,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    disabled = false,
    showLoading = false,
    variant,
  } = props;

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onPress();
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Button
        variant={variant}
        className={variant ? "have-variant" : "button"}
        style={{
          height,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          ...buttonContainerStyle,
        }}
        disabled={disabled || (showLoading && loading) ? true : false}
        onClick={handleClick}>
        {showLoading && loading ? "Loading..." : title}
      </Button>
    </React.Fragment>
  );
};

export default MyButton;
