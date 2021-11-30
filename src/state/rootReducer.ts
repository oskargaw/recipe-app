import { combineReducers } from "redux";
import { recipesReducer } from "./recipes/recipes.reducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
