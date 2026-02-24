import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Top Headlines heading", () => {
  render(<App />);
  const heading = screen.getByText(/Top Headlines/i);
  expect(heading).toBeInTheDocument();
});
