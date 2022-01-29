import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ItemTable from "./ItemTable";

const TableView = ({ data }) => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>File Name</TableCell>
						<TableCell align="right">Num Lines</TableCell>
						<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, i) => (
						<ItemTable key={i} data={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default TableView;
