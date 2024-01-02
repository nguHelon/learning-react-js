import { render, screen } from "@testing-library/react";
import ListComponent from "../components/ListComponent";

describe("lists", () => {
    const list = ["ReactJs", "JavaScript/TypeScript", "HTML/CSS"]
    
    test("Renders correctly with the provided list of items", () => {
        render(<ListComponent items={list} />);
        
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("Displays the correct heading text", () => {
        render(<ListComponent items={list} />);

        const headElement = screen.getByText(/List of Items/i);
        expect(headElement).toBeInTheDocument();
    })

    test("Renders each item in the list", () => {
        render(<ListComponent items={list} />);

        const listElements = screen.getAllByRole("listitem");
        listElements.forEach(list => (
            expect(list).toBeInTheDocument()
        ))
    })
})