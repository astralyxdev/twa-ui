import React, { ChangeEvent, FC, useState } from "react";
import cx from "classnames";

import { TextAreaProps } from "./TextArea.types";

import styles from "./TextArea.module.css";

export const TextArea: FC<TextAreaProps> = ({
  placeholder,
  value,
  disabled,
  readOnly,
  resizeble = false,
  className = "",
  onChange = () => {},
}) => {
  const [textAreaValue, setTextAreaValue] = useState<string>(value || "");

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;

    setTextAreaValue(newValue);
    onChange(newValue);
  };

  return (
    <textarea
      placeholder={placeholder}
      value={textAreaValue}
      onChange={onTextAreaChange}
      disabled={disabled}
      readOnly={readOnly}
      className={cx(styles._content, {
        [styles._with_resize]: resizeble,
        [className]: className,
      })}
    />
  );
};
