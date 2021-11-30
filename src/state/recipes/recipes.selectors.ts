import { RootState } from "../rootReducer";

export const getRecipes = (state: RootState) => state.recipes.recipeList;
