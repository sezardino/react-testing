import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    const headingElement = screen.getByText(/hello world/i);
    expect(headingElement).toBeInTheDocument();

    screen.debug();
  });
});
