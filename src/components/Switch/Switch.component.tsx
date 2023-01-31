import React, { ChangeEvent, FC, useState } from "react";
import cx from "classnames";

import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.types";

export const Switch: FC<SwitchProps> = ({
  disabled,
  style = {},
  checked = false,
  className = "",
  onChange = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const onCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;

    setIsChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <label
      className={cx(styles._wrapper, {
        [className]: className,
      })}
      style={style}
    >
      <input
        type="checkbox"
        className={styles._content}
        disabled={disabled}
        checked={isChecked}
        onChange={onCheckBoxChange}
      />
      <span className={styles._slider} />
    </label>
  );
};