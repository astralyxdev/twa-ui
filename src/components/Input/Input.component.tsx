import React from "react";
import cx from "classnames";

import { InputProps } from "./Input.types";

import styles from "./Input.module.css";

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  disabled,
  readOnly,
  mulitplePosition,
  type = "text",
  className = "",
  onChange = () => {},
}) => {
  const [inputValue, setInputValue] = React.useState(value || "");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      className={cx(styles._wrapper, {
        [styles[`_mp_${mulitplePosition}`]]: mulitplePosition,
        [className]: className,
      })}
      type={type}
      readOnly={readOnly}
      disabled={disabled}
      placeholder={placeholder}
      value={inputValue}
      onChange={onInputChange}
    />
  );
};
