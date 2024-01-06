import { render, screen, fireEvent } from "@testing-library/react";
import ButtonToggleComponent from "../components/ButtonToggleComponent";

describe("testing intial render", () => {
    
    test("Renders with an initial state of 'Off'", () => {
        render(<ButtonToggleComponent />);
        const paragraphElement = screen.getByText(/State: Off/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test("Displays the correct heading text", () => {
        render(<ButtonToggleComponent />);
        const headingElement = screen.getByRole("heading", {
            name: "Button Toggle"
        });
        expect(headingElement).toBeInTheDocument();
    })

    test("Displays the initial state value", () => {
        render(<ButtonToggleComponent />);
        const paragraphElement = screen.getByText(/State: Off/i);
        expect(paragraphElement).toBeInTheDocument();
    });    

});

describe("testing user click event", () => {
    
    test("Toggles the state 'On' when the 'Toggle' button is clicked", () => {
        render(<ButtonToggleComponent />);
        const toggleBtn = screen.getByRole("button", {
            name: "Toggle"
        });

        fireEvent.click(toggleBtn);

        const paragraphElement = screen.getByText(/State: On/i);
        expect(paragraphElement).toBeInTheDocument();

        fireEvent.click(toggleBtn);

        const paragraphElementOff = screen.getByText(/State: Off/i);
        expect(paragraphElementOff).toBeInTheDocument();
    })

})
