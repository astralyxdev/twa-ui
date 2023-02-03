import React from "react";
import cx from "classnames";

import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.types";

export const Switch: React.FC<SwitchProps> = ({
  disabled,
  style = {},
  checked = false,
  className = "",
  onChange = () => {},
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(checked);

  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <span
        className={cx(styles._slider, {
          [styles._slider_active]: isChecked,
        })}
      />
    </label>
  );
};
