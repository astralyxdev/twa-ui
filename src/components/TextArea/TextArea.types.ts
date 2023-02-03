export interface TextAreaProps {
  placeholder?: string;
  className?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  resizeble?: boolean;
  onChange?: (newValue: string) => void;
}
