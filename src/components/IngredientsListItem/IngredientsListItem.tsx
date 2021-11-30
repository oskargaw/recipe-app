import { StyledIngredientsListItem } from "./style";

export interface IngredientsListItemProps {
  ingredient: string;
}

export const IngredientsListItem: React.FC<IngredientsListItemProps> = ({
  ingredient,
}) => <StyledIngredientsListItem>{ingredient}</StyledIngredientsListItem>;
