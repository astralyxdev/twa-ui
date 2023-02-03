import React from "react";
import cx from "classnames";

import { Text } from "../Text";

import { CellProps } from "./Cell.types";

import styles from "./Cell.module.css";

export const Cell: React.FC<CellProps> = ({
  before,
  children,
  description,
  indicator,
  beforeIcon,
  afterIcon,
  after,
  disabled,
  multiPosition,
  withMouse,
  className = "",
  mode = "primary",
  hasActive = true,
  hasHover = true,
  onClick = () => {},
}) => {
  return (
    <div
      className={cx(styles._wrapper, {
        [styles[`_mode_${mode}`]]: mode,
        [styles._with_description]: description && children,
        [styles._with_active]: hasActive,
        [styles._with_hover]: hasHover,
        [styles._disabled]: disabled,
        [styles[`_mp_${multiPosition}`]]: multiPosition,
        [styles._with_mouse]: withMouse,
        [className]: className,
      })}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      <div className={styles._wrapper_in}>
        {beforeIcon ? (
          <div className={styles._before_icon}>{beforeIcon}</div>
        ) : null}
        {before ? <div className={styles._before}>{before}</div> : null}
        {children || description ? (
          <div className={styles._content}>
            {children ? (
              <Text
                className={styles._content_in}
                size={12}
                lineHeight={"14px"}
              >
                {children}
              </Text>
            ) : null}
            {description ? (
              <Text
                className={styles._content_description}
                size={12}
                lineHeight={"14px"}
              >
                {description}
              </Text>
            ) : null}
          </div>
        ) : null}
        {indicator ? (
          <Text className={styles._indicator} size={12} lineHeight={"14px"}>
            {indicator}
          </Text>
        ) : null}
        {after ? (
          <Text className={styles._after} size={12} lineHeight={"14px"}>
            {after}
          </Text>
        ) : null}
        {afterIcon ? (
          <div className={styles._after_icon}>{afterIcon}</div>
        ) : null}
      </div>
    </div>
  );
};
