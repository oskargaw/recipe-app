import React from "react";
import { Recipe } from "../../types/recipes";
import { RecipeModalForm } from "../RecipeModalForm";
import { RecipeModalOverlay } from "../RecipeModalOverlay";
import { RecipeModalHeader, StyledRecipeModal } from "./style";

export interface RecipeModalProps {
  handleClose: () => void;
  recipe?: Recipe;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};

export const RecipeModal: React.FC<RecipeModalProps> = ({
  handleClose,
  recipe,
}) => {
  return (
    <RecipeModalOverlay onClick={handleClose}>
      <StyledRecipeModal
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        className="recipe-modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <RecipeModalHeader>
          {`${recipe ? "Edit" : "Add"} recipe`}
        </RecipeModalHeader>

        <RecipeModalForm handleClose={handleClose} recipe={recipe} />
      </StyledRecipeModal>
    </RecipeModalOverlay>
  );
};
