import { ReactNode } from "react";

export interface ButtonProps {
  disabled?: boolean;
  hasHover?: boolean;
  hasActive?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  children?: ReactNode;
  className?: string;
  stretched?: boolean;
  contentPosition?: "start" | "center" | "end";
  mode?: "primary" | "secondary";
  size?: "s" | "m" | "l";
  onClick?: () => void;
}
