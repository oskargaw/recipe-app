import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../state/recipes/recipes.actionCreators";
import { Recipe } from "../../types/recipes";
import { Button } from "../Button";
import { IngredientsListItem } from "../IngredientsListItem";
import { RecipeModal } from "../RecipeModal";
import {
  HorizontalLine,
  RecipeListItemButtonGroup,
  RecipeListItemContainer,
  RecipeListItemContent,
  RecipeListItemIngredientsHeader,
  RecipeListItemTitle,
} from "./style";

export interface RecipeListItemProps {
  recipe: Recipe;
  selectedItem: number | null;
  onToggle: (id: number) => void;
}

export const RecipeListItem: React.FC<RecipeListItemProps> = ({
  recipe,
  selectedItem,
  onToggle,
}) => {
  const dispatch = useDispatch();

  const [recipeModalOpen, setRecipeModalOpen] = useState(false);

  const closeRecipeModal = () => setRecipeModalOpen(false);
  const openRecipeModal = () => setRecipeModalOpen(true);

  const isRecipeListItemSelected = selectedItem === recipe.id;

  return (
    <RecipeListItemContainer>
      <RecipeListItemTitle onClick={() => onToggle(recipe.id)}>
        <h2>{recipe.name}</h2>
        <span>
          {isRecipeListItemSelected ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </RecipeListItemTitle>

      <RecipeListItemContent show={isRecipeListItemSelected}>
        <RecipeListItemIngredientsHeader>
          <h3>Ingredients</h3>
          <HorizontalLine />
        </RecipeListItemIngredientsHeader>

        {recipe.ingredients.map((ingredient: string, index: number) => (
          <IngredientsListItem key={index} ingredient={ingredient} />
        ))}

        <RecipeListItemButtonGroup>
          <Button
            variant="warning"
            size="sm"
            onClick={() => dispatch(deleteRecipe(recipe.id))}
          >
            Delete
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              recipeModalOpen ? closeRecipeModal() : openRecipeModal()
            }
          >
            Edit
          </Button>
        </RecipeListItemButtonGroup>
      </RecipeListItemContent>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {recipeModalOpen && (
          <RecipeModal handleClose={closeRecipeModal} recipe={recipe} />
        )}
      </AnimatePresence>
    </RecipeListItemContainer>
  );
};
