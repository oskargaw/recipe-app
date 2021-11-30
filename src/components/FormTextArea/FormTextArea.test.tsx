import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { FormTextArea, FormTextAreaProps } from "./FormTextArea";

describe("<FormTextArea />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const mockRegister = jest.fn();

  const props: FormTextAreaProps = {
    name: "test",
    register: mockRegister,
    label: "test",
    placeholder: "test",
  };

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <FormTextArea {...props} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should display correct value after entering it inside the textarea", async () => {
    render(
      <Provider store={store}>
        <FormTextArea {...props} />
      </Provider>
    );

    const input = screen.getByPlaceholderText("test");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "4 bananas,brown sugar" } });

    expect(input).toHaveValue("4 bananas,brown sugar");
  });
});
