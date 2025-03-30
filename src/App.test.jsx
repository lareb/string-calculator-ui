import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders String Calculator heading", () => {
  render(<App />);
  expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
});

test("renders input and button", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
  expect(screen.getByText("Calculate")).toBeInTheDocument();
});
