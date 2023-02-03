import React from "react";
import cx from "classnames";

import { PanelProps } from "./Panel.types";

import styles from "./Panel.module.css";

export const Panel: React.FC<PanelProps> = ({
  padding,
  children,
  className = "",
}) => {
  return (
    <div
      className={cx(styles._wrapper, {
        [className]: className,
      })}
      style={{
        padding,
      }}
    >
      {children}
    </div>
  );
};
