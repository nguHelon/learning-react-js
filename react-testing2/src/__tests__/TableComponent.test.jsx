import { render, screen } from "@testing-library/react";
import TableComponent from "../components/TableComponent";

describe("table items", () => {
    const data = [
        {
            id: 1,
            name: "car",
            price: 20000
        },
        {
            id: 2,
            name: "house",
            price: 300000
        }
    ];

    test("Renders correctly with the provided list of items", () => {
        render(<TableComponent data={data} />);
        const tableRowElement = screen.getAllByRole("row");

        tableRowElement.forEach((row) => {
            expect(row).toBeInTheDocument();            
        })
    })

    test("Displays the correct heading text", () => {
        render(<TableComponent data={data} />);
        const headingElement = screen.getByText(/Data Table/i);
        expect(headingElement).toBeInTheDocument();
    })

    test("Renders each item in the list within the table", () => {
        render(<TableComponent data={data} />);
        const tableData = screen.getAllByRole("cell");

        tableData.forEach((td) => {
            expect(td).toBeInTheDocument();
        })

        data.forEach((item) => {
            const tdItemId = screen.getByText(item.id);
            const tdItemName = screen.getByText(item.name);
            const tdItemPrice = screen.getByText(item.price);

            expect(tdItemId).toBeInTheDocument();
            expect(tdItemName).toBeInTheDocument();
            expect(tdItemPrice).toBeInTheDocument();
        })
    })

    test("Handles an empty list gracefully", () => {
        render(<TableComponent data={[]} />);
        const tableRowElements = screen.queryAllByRole("row");

        expect(tableRowElements).toHaveLength(1);
    })
})