import React, { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { optionsSearch } from "../../config/data";

const OptionsView = ({ loading, defaultOption, setDefaultOption }) => {
	const handleChange = (event) => {
		setDefaultOption(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<Select
					disabled={loading}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={defaultOption}
					onChange={handleChange}
				>
					{optionsSearch?.map((o) => (
						<MenuItem key={o?.path} value={o?.path}>
							{o?.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default OptionsView;
