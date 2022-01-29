import React from "react";
import { render, screen } from "@testing-library/react";
import TableView from "./TableView";

describe("Table View", () => {
	it("Test item table view", () => {
		const data = [
			{
				file: "File Test 1",
				lines: [
					{
						file: "t.csv",
						text: "t",
						number: "1",
						hex: "h",
					},
				],
			},
			{
				file: "File Test 2",
				lines: [
					{
						file: "t.csv",
						text: "t",
						number: "1",
						hex: "h",
					},
				],
			},
		];
		render(<TableView data={data} />);
		expect(screen.queryByText(/file test 2/i)).toBeInTheDocument();
	});
});
