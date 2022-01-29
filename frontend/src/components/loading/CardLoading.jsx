import React from "react";
import { Skeleton, Stack } from "@mui/material";

const CardLoading = () => {
	return (
		<Stack spacing={1} margin="auto" sx={{ width: "100%" }}>
			<Skeleton variant="text" height={40} />
			<Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
				<Skeleton variant="circular" width={20} height={20} />
				<Skeleton
					variant="text"
					height={20}
					sx={{
						width: "100%",
					}}
				/>
			</Stack>
			<Skeleton variant="text" />
		</Stack>
	);
};

export default CardLoading;
