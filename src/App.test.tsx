import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

import styles from "./App.module.css";

test("Button flow", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button", { name: /blue/i });

  expect(buttonElement).toHaveClass(styles.red);

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass(styles.blue);
});

test("Checkbox flow", () => {
  render(<App />);

  // check initial status
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox");

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});
