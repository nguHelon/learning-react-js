import { render, screen, fireEvent } from "@testing-library/react";
import CounterComponent from "../components/CounterComponent";

describe("Testing initial render", () => {

    test("Renders with an initial count of 0", () => {
        render(<CounterComponent />);
        const countElement = screen.getByText(/Count: 0/i);
        expect(countElement).toBeInTheDocument();
    });

    test("Displays the correct heading text", () => {
        render(<CounterComponent />);
        const headingElement = screen.getByText(/Counter/i);
        expect(headingElement).toBeInTheDocument();
    });

    test("Displays the initial count value", () => {
        render(<CounterComponent />);
        const counterElement = screen.getByText(/Count: 0/i);
        expect(counterElement).toBeInTheDocument();
    });

});

describe("Testing increment and decrement functionality", () => {

    test("Increments the count when the 'Increment' button is clicked", () => {
        render(<CounterComponent />);
        const IncrementBtn = screen.getByRole("button", {
            name: "Increment"
        });

        fireEvent.click(IncrementBtn);

        const counterElement = screen.getByText(/Count: 1/i);
        expect(counterElement).toBeInTheDocument();
    });

    test("Decrements the count when the 'Decrement' button is clicked", () => {
        render(<CounterComponent />);
        const DecrementBtn = screen.getByRole("button", {
            name: "Decrement"
        });

        fireEvent.click(DecrementBtn);

        const countElement = screen.getByText(/Count: -1/i);
        expect(countElement).toBeInTheDocument();
    });

});