import { render, screen } from "@testing-library/react";
import App from "./App";
import { fireEvent } from "@testing-library/react";

test("renders String Calculator heading", () => {
  render(<App />);
  expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
});

test("renders input and button", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
  expect(screen.getByText("Calculate")).toBeInTheDocument();
});

test("updates input field on user typing", () => {
  render(<App />);
  const textarea = screen.getByPlaceholderText(/Enter numbers/i);
  fireEvent.change(textarea, { target: { value: "1,2,3" } });
  expect(textarea.value).toBe("1,2,3");
});
