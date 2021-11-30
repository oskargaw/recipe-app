export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
}

export interface RecipesState {
  recipeList: Recipe[];
}
