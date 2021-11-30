import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getRecipes } from "../../state/recipes/recipes.selectors";
import { Button } from "../Button";
import { RecipeList } from "../RecipeList";
import { RecipeModal } from "../RecipeModal";
import { MainContainer, RecipesContainer } from "./style";

export const RecipesScreen = () => {
  const [recipeModalOpen, setRecipeModalOpen] = useState(false);

  const recipes = useSelector(getRecipes);

  const closeRecipeModal = () => setRecipeModalOpen(false);
  const openRecipeModal = () => setRecipeModalOpen(true);

  return (
    <MainContainer>
      <RecipesContainer>
        {recipes.length === 0 ? (
          <h1>No recipes here!</h1>
        ) : (
          <RecipeList recipes={recipes} />
        )}

        <Button
          variant="primary"
          size="md"
          onClick={() =>
            recipeModalOpen ? closeRecipeModal() : openRecipeModal()
          }
        >
          Add recipe
        </Button>
      </RecipesContainer>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {recipeModalOpen && <RecipeModal handleClose={closeRecipeModal} />}
      </AnimatePresence>
    </MainContainer>
  );
};
