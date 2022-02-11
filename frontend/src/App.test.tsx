import { render, fireEvent } from "@testing-library/react";
import App from "./App";
const mockPost = jest.fn();
jest.mock("axios", () => ({ post: () => mockPost }));

beforeAll(() => {
  mockPost.mockImplementation(() => Promise.resolve({ data: "whatevah" }));
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to restaurants/i);
  expect(linkElement).toBeInTheDocument();
});

test("RestaurantForm posts new restaurant which renders on screen", () => {
  const { getByTestId, getByText, queryByText, debug } = render(<App />);
  const formElement = getByTestId("restaurant-form");
  const nameInput = formElement.getElementsByTagName("input")[0];
  fireEvent.change(nameInput, { target: { value: "Bear's kitchen" } });
  const openingTimeInput = formElement.getElementsByTagName("input")[1];
  fireEvent.change(nameInput, { target: { value: "12:00 - 14:00" } });
  const chefNameInput = formElement.getElementsByTagName("input")[2];
  fireEvent.change(nameInput, { target: { value: "Angus" } });
  const addressInput = formElement.getElementsByTagName("input")[3];
  fireEvent.change(nameInput, { target: { value: "143 Roberts Roarf" } });
  const submitButton = formElement.getElementsByTagName("input")[4];
  // debug(nameInput);
  fireEvent.click(submitButton);
  debug(nameInput);
  expect(queryByText("Bear's itchen")).not.toBeInTheDocument();
  expect(getByText("Bear's kitchen")).toBeInTheDocument();
});
