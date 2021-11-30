import { Recipe } from "../../types/recipes";

import {
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
} from "./recipes.actionTypes";

export const addRecipe = (recipe: Recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const updateRecipe = (recipe: Recipe) => ({
  type: UPDATE_RECIPE,
  payload: recipe,
});

export const deleteRecipe = (recipeId: number) => ({
  type: DELETE_RECIPE,
  payload: recipeId,
});

export type RecipesAction = ReturnType<
  typeof addRecipe | typeof updateRecipe | typeof deleteRecipe
>;
