import { render, screen, fireEvent } from "@testing-library/react"
import { test, describe, expect, beforeAll, afterEach, afterAll } from "vitest";
import InteractiveApiCallComponent from "../components/InteractiveApiCallComponent";

describe("Testing user interactions", () => {

    test("Clicking the button initiates the API call", () => {
        render(<InteractiveApiCallComponent />);
        const fetchBtn = screen.getByRole("button", {
            name: "Fetch Data"
        });

        
        fireEvent.click(fetchBtn);

        expect(fetchBtn).toHaveTextContent("Loading...");
    });

    test("The Button is disabled during the API call", () => {
        render(<InteractiveApiCallComponent />);
        const fetchBtn = screen.getByRole("button", {
            name: "Fetch Data"
        });

        fireEvent.click(fetchBtn);

        expect(fetchBtn).toBeDisabled();
    });

    test("Loading Text is displayed during the API call", () => {
        render(<InteractiveApiCallComponent />);
        const fetchBtn = screen.getByRole("button", {
            name: "Fetch Data"
        });

        
        fireEvent.click(fetchBtn);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

});

describe("Testing api call result", () => {

    test("Data is rendered after a successful API call", async () => {
        render(<InteractiveApiCallComponent />);
        const fetchBtn = screen.getByRole("button", {
            name: "Fetch Data"
        });

        fireEvent.click(fetchBtn);

        const ulelements = await screen.findAllByRole("listitem");

        expect(ulelements).toHaveLength(3);        
    })

})