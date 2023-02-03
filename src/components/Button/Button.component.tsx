import React from "react";
import cx from "classnames";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.css";
import { Text } from "../Text";

export const Button: React.FC<ButtonProps> = ({
  disabled,
  before,
  after,
  children,
  stretched,
  hasHover = true,
  hasActive = true,
  className = "",
  contentPosition = "center",
  mode = "primary",
  size = "l",
  onClick = () => {},
}) => {
  return (
    <div
      className={cx(styles._wrapper, {
        [styles._stretched]: stretched,
        [styles._with_hover]: hasHover,
        [styles._with_active]: hasActive,
        [styles._disabled]: disabled,
        [styles[`_position_${contentPosition}`]]:
          styles[`_position_${contentPosition}`],
        [styles[`_mode_${mode}`]]: styles[`_mode_${mode}`],
        [styles[`_sz_${size}`]]: styles[`_sz_${size}`],
        [className]: className,
      })}
    >
      <button
        className={styles._wrapper_in}
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            onClick();
          }
        }}
      >
        <div className={styles._content}>
          {before ? <div className={styles._before}>{before}</div> : null}
          {children ? (
            <Text size={12} lineHeight={"14px"} className={styles._content_in}>
              {children}
            </Text>
          ) : null}
          {after ? <div className={styles._after}>{after}</div> : null}
        </div>
      </button>
    </div>
  );
};
