import { toast } from "react-toastify";
import { axiosChallenge } from "../../config/axios";
import { FILES_TYPE } from "./FilesTypes";

export const getFilesData = async (url, dispatch, query) => {
	return await axiosChallenge({
		url: `files/${url}`,
		method: "get",
		params: {
			fileName: query?.trim(),
		},
	})
		.then(async (data) => {
			const _data = data?.data;
			toast.success(`Successfully retrieved data`);
			return dispatch({
				type: FILES_TYPE.SET_FILES,
				payload: _data,
			});
		})
		.catch((e) => {
			return toast.error("Error in get data");
		});
};
