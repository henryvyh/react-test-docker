const axios = require("axios");

const getFiles = async (req, res, next) => {
	try {
		let files = await fileFormater(true);
		req.files = files;
		next();
	} catch (error) {
		next();
	}
};

const getFilesOnlyList = async (req, res, next) => {
	try {
		let files = await fileFormater(false);
		req.files = files;
		next();
	} catch (error) {
		next();
	}
};

const fileFormater = async (format) => {
	let filesData = await getFilesList();
	let files = [];
	for (let i in filesData) {
		let nameFile = filesData[i];
		let detailUrl = `https://echo-serv.tbxnet.com/v1/secret/file/${nameFile}`;
		let fileDetail;
		try {
			fileDetail = await callbackAxios(detailUrl);
			let _data = fileDetail?.data;
			if (typeof _data === "string") {
				let lines = _data.split("\n");
				let letters = [];
				for (let y = 1; y < lines.length; y++) {
					let th = lines[0].split(",");
					let letter = lines?.length > 1 ? lines[y].split(",") : [];

					if (th?.length === letter?.length || !format) {
						let contentFile = th?.reduce(
							(a, b, index) => ({
								...a,
								[b]: letter[index],
							}),
							{}
						);
						letters.push(contentFile);
					}
				}
				if (letters?.length || !format)
					files.push({ file: nameFile, lines: letters });
			}
		} catch (e) {}
	}
	return files;
};

const getFilesList = async () => {
	try {
		const extApi = "https://echo-serv.tbxnet.com/v1/secret/files";
		const resFiles = await callbackAxios(extApi);
		return resFiles?.data?.files;
	} catch (e) {
		return [];
	}
};

const callbackAxios = async (url) =>
	await axios.get(url, {
		headers: { Authorization: "Bearer aSuperSecretKey" },
		timeout: 3000,
	});

module.exports = { getFiles, getFilesOnlyList };
