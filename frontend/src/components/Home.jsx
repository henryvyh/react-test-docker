import React, { useState, useRef, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import ToolBarView from "./ToolBarView";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TableView from "./table/TableView";
import { getFilesData } from "../redux/files/FilesActions";
import EmptyFiles from "./EmptyFiles";
import BuildLoading from "./loading/BuildLoading";
import "./home.sass";
import { optionsSearch } from "../config/data";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [defaultOption, setDefaultOption] = useState(optionsSearch[0].path);
	const dispatch = useDispatch();
	const [query, setQuery] = useState(null);
	const { files } = useSelector((reducers) => reducers.filesReducer);
	const viewOption = optionsSearch?.filter((e) => e?.path === defaultOption)[0];

	useEffect(() => {
		callbackgetProduct();
	}, [defaultOption]);

	const callbackgetProduct = async () => {
		if (!loading) setLoading(true);
		await getFilesData(defaultOption, dispatch, query);
		setLoading(false);
	};

	const searchData = async (e) => {
		setLoading(true);
		setQuery(e);
		return await getFilesData(defaultOption, dispatch, e);
	};

	const searchAPIDebounced = AwesomeDebouncePromise(searchData, 1000);

	const onInputChange = async (e) => {
		let val = e.target.value?.trim();
		if (!val) {
			return toast.info("Please enter name");
		}
		await searchAPIDebounced(val);
		setLoading(false);
	};

	return (
		<>
			<ToolBarView
				onInputChange={onInputChange}
				loading={loading}
				defaultOption={defaultOption}
				setDefaultOption={setDefaultOption}
				query={query}
			/>
			<Box
				sx={{
					padding: "1.5em",
					display: "flex",
					flexGrow: 1,
					overflow: "auto",
					flexDirection: "column",
				}}
			>
				<Typography variant="h4">
					List of {viewOption?.label} ({files?.length}){" "}
					{query ? ` - Filtered by "${query}"` : ""}
				</Typography>
				<Stack
					className={`${
						files?.length || loading ? "home__wrap" : "home__wrap--empty"
					} home__wrap--loading scroll-material`}
				>
					{loading ? (
						<BuildLoading />
					) : files?.length ? (
						<TableView data={files} />
					) : (
						<EmptyFiles />
					)}
				</Stack>
			</Box>
		</>
	);
};

export default Home;
