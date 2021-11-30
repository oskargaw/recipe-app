import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { Button, ButtonProps } from "./Button";

describe("<Button />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const props: ButtonProps = {
    onClick: () => null,
    variant: "primary",
    size: "md",
  };

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Button {...props} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
