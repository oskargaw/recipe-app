import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import {
  IngredientsListItem,
  IngredientsListItemProps,
} from "./IngredientsListItem";

describe("<IngredientsListItem />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const props: IngredientsListItemProps = {
    ingredient: "test",
  };

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <IngredientsListItem {...props} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
