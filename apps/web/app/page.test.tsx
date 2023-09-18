import { expect, test } from "vitest";
import { render, within, screen } from "../test-util";
import Home from "./page";

test("home", () => {
  render(<Home />);
  const main = within(screen.getByRole("main"));
  expect(main.getByText(/examples\/basic/i)).toBeDefined();
});
