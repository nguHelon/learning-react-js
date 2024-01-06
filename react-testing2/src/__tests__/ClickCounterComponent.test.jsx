import { render, screen, fireEvent } from "@testing-library/react";
import ClickCounterComponent from "../components/ClickCounterComponent";

describe("testing initial render", () =>  {

    test("Renders with an initial count of 0", () => {
        render(<ClickCounterComponent />);
        const paragraphElement = screen.getByText(/Count: 0/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test("Displays the correct heading text", () => {
        render(<ClickCounterComponent />);
        const headingElement = screen.getByRole("heading", {
            name: "Click Counter"
        })
        expect(headingElement).toBeInTheDocument();
    });

    test("Displays the initial count value", () => {
        render(<ClickCounterComponent />);
        const paragraphElement = screen.getByText(/Count: 0/i);
        expect(paragraphElement).toBeInTheDocument();
    });

});

describe("testing user events", () => {
    
    test("Increments the count when the 'Increment' button is clicked", () => {
        render(<ClickCounterComponent />);
        const incrementBtn = screen.getByRole("button", {
            name: "Increment"
        });

        fireEvent.click(incrementBtn);

        const paragraphElement = screen.getByText(/Count: 1/i);
        expect(paragraphElement).toBeInTheDocument();        
    });

    test("Resets the count to 0 when the 'Reset' button is clicked", () => {
        render(<ClickCounterComponent />);
        const resetBtn = screen.getByRole("button", {
            name: "Reset"
        });

        fireEvent.click(resetBtn);

        const paragraphElement = screen.getByText(/Count: 0/i);
        expect(paragraphElement).toBeInTheDocument();
    });

});