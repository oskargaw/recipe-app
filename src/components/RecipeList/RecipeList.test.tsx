import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { RecipeList, RecipeListProps } from "./RecipeList";

describe("<RecipeList />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const props: RecipeListProps = {
    recipes: [
      {
        id: 1,
        name: "test 1",
        ingredients: ["ingredient 1, ingredient 2"],
      },
      {
        id: 2,
        name: "test 2",
        ingredients: ["ingredient 1, ingredient 2"],
      },
    ],
  };

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <RecipeList {...props} />
      </Provider>
    );

    const firstRecipe = screen.getByText("test 1");
    expect(firstRecipe).toBeInTheDocument();

    const secondRecipe = screen.getByText("test 2");
    expect(secondRecipe).toBeInTheDocument();
  });
});
