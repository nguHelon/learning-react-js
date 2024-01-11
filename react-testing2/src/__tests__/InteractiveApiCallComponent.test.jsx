import { render, screen, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import InteractiveApiCallComponent from "../components/InteractiveApiCallComponent";

const server = setupServer(
    rest.get('https://api.example.com/data', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    name: "Ngu"
                },
                {
                    name: "Helon"
                },
                {
                    name: "Software Developer"
                }
            ])
        )
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("testing user interactions", () => {

    test("Clicking the button initiates the API call", () => {
        render(<InteractiveApiCallComponent />);
        const fetchBtn = screen.getByRole("button", {
            name: "Fetch Data"
        });

        expect(fetchBtn).toBeInTheDocument();
    })

})