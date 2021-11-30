import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../state/rootReducer";
import { FormInput, FormInputProps } from "./FormInput";

describe("<FormInput />", () => {
  const mockStore = configureStore([]);
  const initialState: RootState = {
    recipes: {
      recipeList: [],
    },
  };
  const store = mockStore(initialState);

  const mockRegister = jest.fn();

  const props: FormInputProps = {
    name: "test",
    type: "text",
    register: mockRegister,
    label: "test",
    placeholder: "test",
    error: "test",
  };

  it("should render correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <FormInput {...props} />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should display correct value after entering it inside the input", async () => {
    render(
      <Provider store={store}>
        <FormInput {...props} />
      </Provider>
    );

    const input = screen.getByPlaceholderText("test");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "banana bread" } });

    expect(input).toHaveValue("banana bread");
  });
});
