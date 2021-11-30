import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { DELETE_RECIPE } from "../../state/recipes/recipes.actionTypes";
import { RootState } from "../../state/rootReducer";
import { RecipeListItem, RecipeListItemProps } from "./RecipeListItem";

describe("<RecipeListItem />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const mockToggle = jest.fn();

  const props: RecipeListItemProps = {
    recipe: {
      id: 1,
      name: "test 1",
      ingredients: ["ingredient 1", "ingredient 2"],
    },
    selectedItem: 1,
    onToggle: mockToggle,
  };

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <RecipeListItem {...props} />
      </Provider>
    );

    const recipeName = screen.getByText("test 1");
    expect(recipeName).toBeInTheDocument();

    const firstIngredient = screen.getByText("ingredient 1");
    expect(firstIngredient).toBeInTheDocument();

    const secondIngredient = screen.getByText("ingredient 2");
    expect(secondIngredient).toBeInTheDocument();
  });

  it("should open recipe modal after clicking edit button", () => {
    render(
      <Provider store={store}>
        <RecipeListItem {...props} />
      </Provider>
    );

    const modalHeader = screen.queryByText("Edit recipe");
    expect(modalHeader).not.toBeInTheDocument();

    const editButton = screen.getByText("Edit");

    fireEvent.click(editButton);

    const modalHeaderTitle = screen.getAllByText("Edit recipe")[0];
    expect(modalHeaderTitle).toBeInTheDocument();
  });

  it("should have delete button working", () => {
    render(
      <Provider store={store}>
        <RecipeListItem {...props} />
      </Provider>
    );

    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    const actionDeleteRecipe = store.getActions()[0];
    expect(actionDeleteRecipe.type).toEqual(DELETE_RECIPE);
  });
});
