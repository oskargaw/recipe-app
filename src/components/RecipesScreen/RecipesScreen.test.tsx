import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { RecipesScreen } from "./RecipesScreen";

describe("<RecipeListItem />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <RecipesScreen />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should open recipe modal after clicking add recipe button", () => {
    render(
      <Provider store={store}>
        <RecipesScreen />
      </Provider>
    );

    const modalHeader = screen.queryByText("Edit recipe");
    expect(modalHeader).not.toBeInTheDocument();

    const addRecipeButton = screen.getByText("Add recipe");

    fireEvent.click(addRecipeButton);

    const modalHeaderTitle = screen.getAllByText("Add recipe")[0];
    expect(modalHeaderTitle).toBeInTheDocument();
  });
});
