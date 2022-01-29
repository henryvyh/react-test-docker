const express = require("express");
var cors = require("cors");
const routerFiles = require("./src/router/routerFiles");
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use("/api", routerFiles);
module.exports = app.listen(port, () => {
	console.log("Sever started on port ", port);
});
