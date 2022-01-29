import React from "react";
import { Stack, Typography } from "@mui/material";
import FileIcon from "@mui/icons-material/Article";

const EmptyFiles = () => {
	return (
		<Stack
			sx={{
				padding: "1em",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				flexGrow: 1,
				color: "#fff",
			}}
		>
			<FileIcon sx={{ fontSize: 190 }} />
			<Typography variant="h4">Not found files</Typography>
			<Typography variant="body1">
				There are no files, try searching with another keyword
			</Typography>
		</Stack>
	);
};

export default EmptyFiles;
