import React, { FC } from "react";
import cx from "classnames";

import { Text } from "../Text";

import { BlockHeaderProps } from "./BlockHeader.types";

import styles from "./BlockHeader.module.css";

export const BlockHeader: FC<BlockHeaderProps> = ({
  children,
  after,
  className = "",
}) => {
  return (
    <div
      className={cx(styles._wrapper, {
        [className]: className,
      })}
    >
      {children ? (
        <Text className={styles._content} size={12} lineHeight={"14px"}>
          {children}
        </Text>
      ) : null}
      {after ? (
        <Text className={styles._after} size={12} lineHeight={"14px"}>
          {after}
        </Text>
      ) : null}
    </div>
  );
};
