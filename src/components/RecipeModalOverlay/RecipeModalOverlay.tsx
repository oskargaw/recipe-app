import { StyledRecipeModalOverlay } from "./style";

export interface RecipeModalOverlayProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const RecipeModalOverlay: React.FC<RecipeModalOverlayProps> = ({
  children,
  onClick,
}) => (
  <StyledRecipeModalOverlay
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </StyledRecipeModalOverlay>
);
