import { render, screen, fireEvent } from "@testing-library/react";
import InteractiveFormComponent from "../components/InteractiveFormComponent";

describe("testing initial render", () => {

    test("Renders with the provided name prop", () => {
        render(<InteractiveFormComponent name="Helon" />);
        const inputElement = screen.getByLabelText("Enter Your Age:");

        expect(inputElement).toBeInTheDocument();
    });

    test("Display the correct heading text", () => {
        render(<InteractiveFormComponent />);
        const headingElement = screen.getByText(/Interactive Form/i);

        expect(headingElement).toBeInTheDocument();
    })

});

describe("testing user actions", () => {

    test("Updates the age state when the user enters their age", () => {
        render(<InteractiveFormComponent name="Helon" />);
        const inputElement = screen.getByLabelText("Enter Your Age:");

        fireEvent.change(inputElement, { target: { value: 20 } });

        expect(inputElement.value).toBe("20");
    });

    test("Displays a greeting message when the form is submitted", () => {
        render(<InteractiveFormComponent name="Helon" />);
        const inputElement = screen.getByLabelText("Enter Your Age:");
        const submitBtn = screen.getByRole("button", {
            name: "Submit"
        });

        fireEvent.change(inputElement, { target: { value: 20 } });

        fireEvent.click(submitBtn);

        const paragraphElement = screen.getByText(/Hello, Helon! You are 20 years old/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test("Handles form submission with an empty age gracefully", () => {
        render(<InteractiveFormComponent name="Helon" />);;
        const submitBtn = screen.getByRole("button", {
            name: "Submit"
        });

        fireEvent.click(submitBtn);

        const paragraphElement = screen.getByText(/Please enter your age./i);
        expect(paragraphElement).toBeInTheDocument();
    });

})