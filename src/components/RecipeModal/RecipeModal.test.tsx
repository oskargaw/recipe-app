import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { RecipeModal, RecipeModalProps } from "./RecipeModal";

describe("<RecipeModal />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const mockHandleClose = jest.fn();

  it("should render correctly modal for adding new recipe", () => {
    const props: RecipeModalProps = {
      handleClose: mockHandleClose,
    };

    render(
      <Provider store={store}>
        <RecipeModal {...props} />
      </Provider>
    );

    const recipeModalHeader = screen.getAllByText("Add recipe")[0];
    expect(recipeModalHeader).toBeInTheDocument();

    const recipeNameInput = screen.getByPlaceholderText("Recipe name");
    expect(recipeNameInput).toBeInTheDocument();

    const ingredientsInput = screen.getByPlaceholderText(
      "Enter ingredients separated by commas"
    );
    expect(ingredientsInput).toBeInTheDocument();

    const addRecipeButton = screen.getByRole("button", {
      name: "Add recipe",
    });
    expect(addRecipeButton).toBeInTheDocument();
  });

  it("should render correctly modal for editing already existing recipe", () => {
    const props: RecipeModalProps = {
      handleClose: mockHandleClose,
      recipe: {
        id: 1,
        name: "test 1",
        ingredients: ["ingredient 1", "ingredient 2"],
      },
    };

    render(
      <Provider store={store}>
        <RecipeModal {...props} />
      </Provider>
    );

    const recipeModalHeader = screen.getAllByText("Edit recipe")[0];
    expect(recipeModalHeader).toBeInTheDocument();

    const recipeNameInput = screen.getByText("Recipe:");
    expect(recipeNameInput).toBeInTheDocument();

    const ingredientsInput = screen.getByText("Ingredients:");
    expect(ingredientsInput).toBeInTheDocument();

    const editRecipeButton = screen.getByRole("button", {
      name: "Edit recipe",
    });
    expect(editRecipeButton).toBeInTheDocument();
  });
});
