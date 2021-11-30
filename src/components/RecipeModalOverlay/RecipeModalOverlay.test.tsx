import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import {
  RecipeModalOverlay,
  RecipeModalOverlayProps,
} from "./RecipeModalOverlay";

describe("<RecipeModalOverlay />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const mockOnClick = jest.fn();

  const props: RecipeModalOverlayProps = {
    children: "test",
    onClick: mockOnClick,
  };

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <RecipeModalOverlay {...props} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
