import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders String Calculator heading", () => {
  render(<App />);
  expect(screen.getByText(/String Calculator/i)).toBeInTheDocument();
});
