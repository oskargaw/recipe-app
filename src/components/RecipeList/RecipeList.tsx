import { useState } from "react";
import { Recipe } from "../../types/recipes";
import { RecipeListItem } from "../RecipeListItem";

export interface RecipeListProps {
  recipes: Recipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const toggleAccordion = (itemId: number) => {
    selectedItem === itemId && setSelectedItem(null);

    setSelectedItem(itemId);
  };

  return (
    <>
      {recipes.map((recipe: Recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          selectedItem={selectedItem}
          onToggle={toggleAccordion}
        />
      ))}
    </>
  );
};
