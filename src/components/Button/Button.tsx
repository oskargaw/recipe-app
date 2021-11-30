import { StyledButton } from "./style";

export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary" | "warning";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
