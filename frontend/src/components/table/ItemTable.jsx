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

const ItemTable = ({ data }) => {
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{data?.file}
				</TableCell>
				<TableCell align="right">{data?.lines?.length}</TableCell>
				<TableCell align="right"></TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								Lines
							</Typography>
							<Table
								size="small"
								aria-label="purchases"
								sx={{ overflow: "auto" }}
							>
								<TableHead>
									<TableRow>
										<TableCell>File Name</TableCell>
										<TableCell>Text</TableCell>
										<TableCell align="right">Number</TableCell>
										<TableCell align="right">Hex</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data?.lines?.length ? (
										data?.lines?.map((lineRow, i) => (
											<TableRow key={i}>
												<TableCell component="th" scope="row">
													{lineRow?.file}
												</TableCell>
												<TableCell>{lineRow?.text}</TableCell>
												<TableCell align="right">{lineRow?.number}</TableCell>
												<TableCell align="right">{lineRow?.hex}</TableCell>
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell colSpan={4} sx={{ textAlign: "center" }}>
												No data
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
};

export default ItemTable;
