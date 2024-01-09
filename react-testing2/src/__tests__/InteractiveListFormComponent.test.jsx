import { render, screen, fireEvent } from "@testing-library/react";
import InteractiveListFormComponent from "../components/InteractiveListFormComponent";

describe("testing initial render", () => {

    test("Renders with the provided name prop", () => {
        render(<InteractiveListFormComponent name="Helon" />);
        const headingElement = screen.getByRole("heading", {
            name: /Interactive List Form for Helon/i
        });

        expect(headingElement).toBeInTheDocument();
    });

    test("Displays the correct heading text", () => {
        render(<InteractiveListFormComponent name="Helon" />);
        const headingElement = screen.getByRole("heading", {
            name: /Interactive List Form for Helon/i
        });

        expect(headingElement).toBeInTheDocument();
    });

});

describe("testing user interaction", () => {


    test("Updates the item state when the user enters an item name", () => {
        render(<InteractiveListFormComponent name="Helon" />);
        const inputElement = screen.getByLabelText("Enter Item:");
        expect(inputElement).toBeInTheDocument();

        fireEvent.change(inputElement, { target: { value: "Backend" } });

        expect(inputElement.value).toBe("Backend");
    });

    test("Adds an item to the list when the 'Add Item' button is clicked", () => {
        render(<InteractiveListFormComponent name="Helon" />);
        const inputElement = screen.getByLabelText("Enter Item:");
        
        fireEvent.change(inputElement, { target: { value: "Frontend" } });

        const addBtn = screen.getByRole("button", {
            name: "Add Item"
        });
        expect(addBtn).toBeInTheDocument();

        fireEvent.click(addBtn);

        const listElement = screen.getByText(/Frontend/i);

        expect(listElement).toBeInTheDocument();
    });

    test("Removes an item from the list when the 'Remove' button is clicked", () => {
        render(<InteractiveListFormComponent name="Helon" />);
        const inputElement = screen.getByLabelText("Enter Item:");

        fireEvent.change(inputElement, { target: { value: "Backend" } });

        const addBtn = screen.getByRole("button", {
            name: "Add Item"
        });

        fireEvent.click(addBtn);

        const removeBtn = screen.getByRole("button", {
            name: "Remove"
        });

        fireEvent.click(removeBtn);

        const listItem = screen.queryByText(/Backend/i);
        expect(listItem).not.toBeInTheDocument();
    })

})