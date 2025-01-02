import { render, screen } from "@testing-library/react";
import App from "./App";

test("should find hello world text", () => {
  render(<App />);
  screen.getByText("Hello world!");
});
