import React from "react";
import cx from "classnames";

import { Text } from "../Text";

import { AvatarProps } from "./Avatar.types";

import styles from "./Avatar.module.css";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 24,
  fallbackName = "",
  className = "",
}) => {
  const [isAvatarLoadError, setIsAvatarLoadError] = React.useState(!src);

  const onAvatarLoadFailed = () => {
    setIsAvatarLoadError(true);
  };

  React.useEffect(() => {
    setIsAvatarLoadError(!src);
  }, [src]);

  return (
    <div
      className={cx(styles.__wrapper, {
        [styles.__load_error]: isAvatarLoadError,
        [className]: className,
      })}
      style={{
        width: size,
        height: size,
      }}
    >
      {!isAvatarLoadError ? (
        <img
          onError={onAvatarLoadFailed}
          src={src}
          alt={alt}
          className={styles.__content}
        />
      ) : null}

      {isAvatarLoadError ? (
        <Text
          color={"var(--color_avatar_fallback)"}
          size={14}
          lineHeight={"14px"}
          weight={"600"}
          className={styles.__fallback_content}
        >
          {fallbackName}
        </Text>
      ) : null}
    </div>
  );
};
