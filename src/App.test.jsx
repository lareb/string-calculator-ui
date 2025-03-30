import { render, screen } from "@testing-library/react";
import App from "./App";
import { fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import axios from "axios";

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

vi.mock("axios");

test("calculates sum and displays result", async () => {
  axios.post.mockResolvedValue({ data: { result: 6 } });

  render(<App />);
  const textarea = screen.getByPlaceholderText(/Enter numbers/i);
  const button = screen.getByText("Calculate");

  fireEvent.change(textarea, { target: { value: "1,2,3" } });
  fireEvent.click(button);

  expect(await screen.findByText("Result: 6")).toBeInTheDocument();
});
