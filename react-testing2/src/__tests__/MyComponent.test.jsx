import MyComponent from "../components/MyComponent";
import { render, screen } from "@testing-library/react"

test("Renders correctly with the provided name", () => {
    render(<MyComponent name="Helon" />);
    const headingElement = screen.getByText(/Hello, Helon!/i);
    expect(headingElement).toBeInTheDocument();
})

test("Displays the correct heading text", () => {
    render(<MyComponent name="Ngu Helon" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent(/Hello, Ngu Helon!/i);
})

test("Contains the expected paragraph text", () => {
    render(<MyComponent name="Helon" />);
    const paragraphElement = screen.getByText(/This is a simple React Component./i);
    expect(paragraphElement).toBeInTheDocument();
})

test("Missing or undefined name prop", () => {
    render(<MyComponent />);
    const headingElement = screen.getByText(/Hello, !/i);
    expect(headingElement).toBeInTheDocument();
})