import React from "react";
import { render, screen } from "@testing-library/react";
import ItemTable from "./ItemTable";

describe("ItemTable", () => {
	it("Test item table", () => {
		const data = {
			file: "File Test",
			lines: [
				{
					file: "t.csv",
					text: "t",
					number: "1",
					hex: "h",
				},
			],
		};
		render(<ItemTable data={data} />);
		expect(screen.queryByText(/file/i)).toBeInTheDocument();
	});
});
