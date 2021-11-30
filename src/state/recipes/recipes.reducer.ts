import { Recipe, RecipesState } from "../../types/recipes";
import { RecipesAction } from "./recipes.actionCreators";
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
} from "./recipes.actionTypes";

const initialState: RecipesState = {
  recipeList: [],
};

export const recipesReducer = (
  state: RecipesState = initialState,
  action: RecipesAction
) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipeList: [...state.recipeList, action.payload],
      };
    case UPDATE_RECIPE:
      const updatedRecipe = state.recipeList.map((recipe: Recipe) =>
        recipe.id === action.payload.id
          ? {
              ...recipe,
              name: action.payload.name,
              ingredients: action.payload.ingredients,
            }
          : recipe
      );

      return {
        ...state,
        recipeList: updatedRecipe,
      };

    case DELETE_RECIPE:
      const filteredRecipes = state.recipeList.filter(
        (recipe: Recipe) => recipe.id !== action.payload
      );

      return {
        ...state,
        recipeList: filteredRecipes,
      };
    default:
      return state;
  }
};
