import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

test("renders String Calculator heading", () => {
  render(<App />);
  expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
});

test("renders input and button", () => {
  render(<App />);

  const textarea = screen.getByPlaceholderText(/Enter numbers/i);

  const button = screen.getByText("Calculate");

  expect(textarea).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("calculates sum and displays result", async () => {
  axios.post.mockResolvedValue({ data: { result: 6 } });

  render(<App />);
  const textarea = screen.getByPlaceholderText(/Enter numbers/i);
  const button = screen.getByText("Calculate");

  fireEvent.change(textarea, { target: { value: "1,2,3" } });
  fireEvent.click(button);

  expect(await screen.findByText("Result: 6")).toBeInTheDocument();
});

test("shows error when API call fails", async () => {
  axios.post.mockRejectedValue({ response: { data: { error: "Invalid input" } } });

  render(<App />);
  const textarea = screen.getByPlaceholderText(/Enter numbers/i);
  const button = screen.getByText("Calculate");

  fireEvent.change(textarea, { target: { value: "abc" } });
  fireEvent.click(button);

  expect(await screen.findByText("Invalid input")).toBeInTheDocument();
});
