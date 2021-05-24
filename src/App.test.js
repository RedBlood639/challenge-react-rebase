import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders My really cool blog site logo", () => {
  render(<App />);
  const linkElement = screen.getByText(/My really cool blog site/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Auto Review Article", () => {
  render(<App />);
  const linkElement = screen.getByText(/Auto Review:/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Biology Today article", () => {
  render(<App />);
  const linkElement = screen.getByText(/Biology Today:/i);
  expect(linkElement).toBeInTheDocument();
});
