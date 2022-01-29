import React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import SearchView from "./search/SearchView";

const ToolBarView = ({
	onInputChange,
	loading,
	defaultOption,
	setDefaultOption,
	query,
}) => {
	return (
		<AppBar position="sticky" sx={{ padding: "0.8em" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { md: "flex", xs: "none" } }}
						>
							REACT CHALLENGE
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { md: "none" } }}
						>
							R C
						</Typography>
					</Box>
					<SearchView
						query={query}
						setDefaultOption={setDefaultOption}
						onInputChange={onInputChange}
						loading={loading}
						defaultOption={defaultOption}
					/>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default ToolBarView;
