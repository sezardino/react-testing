import { render, screen } from "@testing-library/react";
import App from "./App";

import styles from "./App.module.css";

test("App render button with correct text and color", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass(styles.red);
});
