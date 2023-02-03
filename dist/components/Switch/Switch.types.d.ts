import { CSSProperties } from "react";
export interface SwitchProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    style?: CSSProperties;
    onChange?: (newValue: boolean) => void;
}
