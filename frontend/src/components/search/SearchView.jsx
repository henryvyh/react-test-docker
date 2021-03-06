import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Stack } from "@mui/material";
import OptionsView from "./OptionsView";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: "0.8em",
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "30ch",
			"&:focus": {
				width: "40ch",
			},
		},
	},
}));
const SearchView = ({
	onInputChange,
	loading,
	defaultOption,
	setDefaultOption,
	query,
}) => {
	return (
		<Stack direction="row" alignItems="center">
			<OptionsView
				loading={loading}
				defaultOption={defaultOption}
				setDefaultOption={setDefaultOption}
			/>
			{defaultOption === "data" ? (
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						disabled={loading}
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
						onChange={onInputChange}
						defaultValue={query}
					/>
				</Search>
			) : null}
		</Stack>
	);
};

export default SearchView;
