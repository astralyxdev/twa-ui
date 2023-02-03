import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: HTMLInputTypeAttribute;
  mulitplePosition?: undefined | "start" | "center" | "end";
  onChange: (newValue: string) => void;
}
