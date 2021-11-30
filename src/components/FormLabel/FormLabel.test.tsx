import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { FormLabel, FormLabelProps } from "./FormLabel";

describe("<FormLabel />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const props: FormLabelProps = {
    htmlFor: "test",
    children: "test",
  };

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <FormLabel {...props} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
