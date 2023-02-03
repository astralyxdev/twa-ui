import { ReactNode } from "react";
export interface CellProps {
    beforeIcon?: ReactNode;
    before?: ReactNode;
    children?: ReactNode;
    description?: ReactNode;
    indicator?: ReactNode;
    after?: ReactNode;
    afterIcon?: ReactNode;
    disabled?: boolean;
    className?: string;
    hasHover?: boolean;
    hasActive?: boolean;
    withMouse?: boolean;
    multiPosition?: undefined | "start" | "center" | "end";
    mode?: "primary" | "accent";
    onClick?: () => void;
}
